import pgInstance from "@/src/lib/pgInstance";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  orderId?: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { orderId } = params ;
   
    const userId:string = JSON.parse(request.headers.get("userId")!);

    const query = `SELECT * from "order" WHERE customername  = ${orderId}`;
   
    // const query = `SELECT * from "order" WHERE createdby = ${userId}`;
    const response = await pgInstance.unsafe(query);
    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error: error.message || "Somethineg went wrong" },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { orderId } = params;
    const { customerName } = await request.json();
    const userId = JSON.parse(request.headers.get("userId")!);

    if (!customerName) {
      return NextResponse.json(
        { error: "required fields missing." },
        {
          status: 401,
        }
      );
    }

    const query = `
    UPDATE orders
    SET customer_name = '${customerName}'
    WHERE id = ${orderId}
    AND createdBy = ${userId}
    returning *
    ;
    `;

    const data = await pgInstance.unsafe(query);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error: error.message || "Somethineg went wrong" },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { orderId } = params;
    const userId = JSON.parse(request.headers.get("userId")!);

    // const query = `DELETE from orders WHERE id = ${orderId} AND createdBy = ${userId}`;
    const query = `DELETE from orders WHERE  createdBy = ${userId}`;

    await pgInstance.unsafe(query);

    return NextResponse.json(
      { message: "deleted successfully" },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error: error.message || "Somethineg went wrong" },
      {
        status: 500,
      }
    );
  }
}

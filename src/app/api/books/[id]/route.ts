import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";
import { BookResponse, Props } from "../../../../../types";

const conn = postgres({
  ssl: require,
});


export async function GET(request: NextRequest,{params:{id}}:Props) {
 
  const result = await conn.unsafe(`SELECT * FROM book WHERE id = ${id} `) as BookResponse[];
    if(id == 0 || id > 6){
        return new NextResponse(JSON.stringify({"message": "No book found with this id"})  )
    }
    else
    return  NextResponse.json({ data: result}, { status: 200 }
    // return new NextResponse(JSON.stringify(result.at(result.id))
        );
  }
  
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

const conn = postgres({
  ssl: require,
});

export async function GET(request: NextRequest) {
  const result = await conn.unsafe("SELECT * FROM book");
  return  NextResponse.json(result);
}


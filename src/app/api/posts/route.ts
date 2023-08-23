import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (request: Request) => {
  try {
    await connect();
    const postData = JSON.stringify(await Post.find());
    return new NextResponse(postData, { status: 200 });
  } catch (error) {
    return new NextResponse(String(error), { status: 500 });
  }
};

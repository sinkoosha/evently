import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Topic.create({ title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }

export async function GET() {
  await connectToDatabase();

  const user = await User.schema;
  return NextResponse.json({ user });
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }

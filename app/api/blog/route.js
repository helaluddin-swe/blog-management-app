import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function GET(request) {
  console.log("blog get hit");
  return NextResponse.json({ mgs: "Api working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get("image");

  const timeStams =Date.now();
  const ImageBytesData = await image.arrayBuffer();
  const path = `./public/${timeStams}_${image.name}`;
  const buffer = Buffer.from(ImageBytesData);
  await writeFile(path, buffer);
  const imageUrl = `${timeStams}_${image.name}`;
  return NextResponse.json({ imageUrl });
}

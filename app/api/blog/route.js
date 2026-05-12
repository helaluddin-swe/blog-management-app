import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";

import connectDB from "@/app/lib/configs/db";
import BlogModel from "@/app/lib/models/blogModel";

const loadDb = async () => {
  await connectDB();
};
loadDb();
export async function GET(request) {
  console.log("blog get hit");
  return NextResponse.json({ mgs: "Api working" });
}

export async function POST(request) {
  try {
    await loadDb();
    // blog image handle
    const formData = await request.formData();
    const image = formData.get("image");
    const timestamp = Date.now();
    const ImageBytesData = await image.arrayBuffer();
    const path = `./public/${timestamp}_${image.name}`;
    const buffer = Buffer.from(ImageBytesData);
    await writeFile(path, buffer);
    const imageUrl = `${timestamp}_${image.name}`;
    // 2. Handle Author Image
    const authorFile = formData.get("authorImg");
    const authorBytes = await authorFile.arrayBuffer();
    const authorPath = `./public/${timestamp}_${authorFile.name}`;
    await writeFile(authorPath, Buffer.from(authorBytes));
    const authorImgUrl = `${timestamp}_${authorFile.name}`;

    const blogData = {
      title: `${formData.get("title")}`, 
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      authorImg:authorImgUrl, 
      image: imageUrl, 
    };
    await BlogModel.create(blogData);
    console.log("saved blog");
    return NextResponse.json({ success: true, message: "Blog Added" });
  } catch (error) {
   console.error("The exact error is:", error); 
  return NextResponse.json({ success: false, error: error.message })
  }
}

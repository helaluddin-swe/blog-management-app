import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descriptiop: { type: String, required: true },
  authorName: { type: String, required: true },
  authorImage: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
});
const Blog = mongoose.model("blog", blogSchema);
export default Blog;

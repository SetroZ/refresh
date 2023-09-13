import mongoose from "mongoose";
const { Schema } = mongoose;

export interface postType {
  _id:string,
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const postSchema = new Schema<postType>({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);


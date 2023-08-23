import React from "react";
import Image from "next/image";
import Link from "next/link";
import { postType } from "@/models/Post";
import { Metadata } from "next";
export const metadata:Metadata={
  title:'Blog'
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  return res.json();
};
const Blog = async () => {
  const Data: postType[] = await getData();

  return (
    <div className="flex flex-col gap-[25px]">
      {Data.map((x) => (
        <div className="" key={x._id as string}>
          <h1>{x.title}</h1>
          <Link href={`blog/${x._id}`}>
            <Image src={x.img} width={100} height={50} alt={x.title} />
            <h3>{x.desc}</h3>
            <p>{x.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

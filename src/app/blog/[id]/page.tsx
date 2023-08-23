import React from "react";
import { postType } from "@/models/Post";
import Image from "next/image";
const getData = async (id: string) => {
  const Data = await fetch(`http://localhost:3000/api/posts/${id}`);

  return Data.json();
};


export  async function generateMetadata({params}:{params:{id:string}}){
   const Data:postType =  await getData(params.id)
  return{
    title: Data.title,

  }
}


const page = async ({ params }: { params: { id: string } }) => {
  const Data: postType = await getData(params.id);
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="" key={Data._id as string}>
        <h1>{Data.title}</h1>
        <Image src={Data.img} width={100} height={50} alt={Data.title} />
        <h3>{Data.desc}</h3>
        <p>{Data.content}</p>
      </div>
    </div>
  );
};

export default page;

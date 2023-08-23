import React from "react";
import Image from "next/image";
import { Metadata } from "next";


export const metadata:Metadata={
  title:'About'
}

const About = () => {
  return (
    <div className="flex flex-col justify-between gap-10">
      <div className=" relative ">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Communication"
          className=" grayscale object-cover h-[300px] w-[100%]  "
          sizes=""
          height={1500}
          width={2250}
        />
        <div className="bottom-0
         absolute pt-2 pb-2 pl-3 pr-2 text-3xl bg-green-700 text-white font-semibold text-right   rounded-sm  ">
          {" "}
          Digital Storytellers
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-between content-center items-center">
        <div className=" ">
          <h1 className="font-bold text-2xl mb-1  ">Who We Are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            voluptatum natus, necessitatibus dolorum ab quisquam magnam
            obcaecati quam voluptates aliquid optio rerum corporis impedit! Amet
            optio quod tenetur libero nulla! Ut voluptate odit deleniti, ducimus
            doloribus nisi! Veritatis optio nisi magni ratione quam impedit
            <br />
            perspiciatis sequi dolore, aspernatur, rem unde, sunt iste
            exercitationem fuga neque perferendis accusantium dolorem deserunt
            ex. Incidunt totam esse corporis voluptatibus animi obcaecati
            repellat praesentium ipsa minus, expedita cumque enim minima quasi
            iusto sit. Libero, aut et voluptas temporibus laborum quibusdam.
            <br />
            Aperiam saepe nobis iusto soluta. Cumque in aliquid doloribus error
            eum facere eaque voluptate? Quaerat consequuntur quis iure? Nesciunt
            accusantium deleniti sequi ipsam optio praesentium, ab laudantium
            fugit id aperiam, vel magni? Officia, porro aperiam.
          </p>
        </div>
        <div className=" ">
          <h1 className="font-bold text-2xl mb-1">Who We Are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            voluptatum natus, necessitatibus dolorum ab quisquam magnam
            obcaecati quam voluptates aliquid optio rerum corporis impedit! Amet
            optio quod tenetur libero nulla! Ut voluptate odit deleniti, ducimus
            doloribus nisi! Veritatis optio nisi magni ratione quam impedit
            <br />
            perspiciatis sequi dolore, aspernatur, rem unde, sunt iste
            exercitationem fuga neque perferendis accusantium dolorem deserunt
            ex. Incidunt totam esse corporis voluptatibus animi obcaecati
            repellat praesentium ipsa minus, expedita cumque enim minima quasi
            iusto sit. Libero, aut et voluptas temporibus laborum quibusdam.
            <br />
            Aperiam saepe nobis iusto soluta. Cumque in aliquid doloribus error
            eum facere eaque voluptate? Quaerat consequuntur quis iure? Nesciunt
            accusantium deleniti sequi ipsam optio praesentium, ab laudantium
            fugit id aperiam, vel magni? Officia, porro aperiam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import { Metadata } from "next";
export const metadata:Metadata={
  title:'Lama Dev',
  description:'lama dev page'
}

export default function Home() {
  return (
    <div className="flex items-center gap-10 ">
      <div className=" flex flex-col gap-20   ">
        <h1
          className={`${styles.gradtext}
         text-7xl font-bold leading-[6rem]
          
         `}
        >
          Better Design for your Digital Products
        </h1>
        <p className="text-2xl font-thin">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <button className="p-2 self-start text-white bg-green-800 rounded-lg  ">
          See Our Works
        </button>
      </div>
      <Image
        className="object-contain w-[100%] max-h-[900px] "
        src={Hero}
        alt="Hero image"
      />
    </div>
  );
}

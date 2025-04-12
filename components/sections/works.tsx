"use client";

import { Card } from "@/components/atoms/card";
// import { NextIcon } from "@/components/atoms/next-icon";
import { Badge } from "@/components/atoms/badge";
import Image from "next/image";
import Link from "next/link";
import { NextIcon } from "../atoms/next-icon";

const projects: {
  title: string;
  description: string;
  stacks: string[];
  image: string;
  alt: string;
  link: string;
}[] = [
  {
    title: "Dashe",
    description: "CLI script that makes it easy to customize your bash prompt according to your style.",
    stacks: ["shell", "git", "aws"],
    image: "/dashe.png",
    alt: "Stylized Dashe logo above the text 'Making it easy to customize your prompt', on a purple gradient background.",
    link: "https://github.com/sonidolabs/dashe",
  },
  {
    title: "Accordium",
    description: "Accordium was designed to be simple, generic enough to suit any style and framework.",
    stacks: ["shell", "git", "aws"],
    image: "/accordium.png",
    alt: "Stylized 'A' logo above the text 'Create expansive lists from a simple, easy-to-use structure.' on a black background.",
    link: "https://github.com/sonidolabs/accordium",
  },
  {
    title: "Davinci",
    description: "CLI script that makes it easy to customize your bash prompt according to your style.",
    stacks: ["shell", "git", "aws"],
    image: "/davinci.png",
    alt: "Promotional image for the Davinci theme for VSCode, showing a code editor interface and four highlighted benefits: Improved readability, Syntax highlighting, Visual consistency, and Modern style.",
    link: "https://github.com/sonidolabs/davinci",
  },
];

export function Works() {
  return (
    <div className="flex flex-col">
      <div className="flex item-center justify-center bg-white border-b border-gray-300">
        <div className="text-center max-w-[856px] px-2 py-8 md:px-4 md:py-10">
          <h2 className="text-2xl lg:text-3xl font-medium tracking-tight"><strong className="text-black font-medium">When lines of code meet imagination,<br />it{"'"}s possible to create</strong> truly amazing things.</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 p-4 lg:p-8">
        {projects.map(project => (
          <Link
            className="w-full h-full"
            key={project.title}
            href={project.link}
            target="_blank"
          >
            <Card className="flex flex-col gap-4 p-4 lg:p-8 w-full h-full hover:bg-transparent cursor-pointer">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-800 text-xl md:text-2xl">{project.title}</h2>
                <span className="p-1 bg-black rounded-full text-white">
                  <NextIcon name="iconamoon:arrow-top-right-1" />
                </span>
              </div>
              <p>{project.description}</p>
              <div className="flex items-center gap-4">
                {project.stacks.map(stack => (
                  <Badge key={stack} variant="blue">{stack}</Badge>
                ))}
              </div>
              <Image
                className="w-full rounded-xl"
                src={project.image}
                width={1080}
                height={636}
                alt={project.alt}
              />
            </Card>
          </Link>
        ))}
        <Card className="hidden sm:block w-full h-full p-4 lg:p-8">
          <div className="flex flex-col items-center justify-center gap-8 w-full h-full rounded-xl bg-[#F1F2F9] bg-[url('data:image/svg+xml,%3csvg%20width%3D%27100%25%27%20height%3D%27100%25%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20fill%3D%27none%27%20rx%3D%2712%27%20ry%3D%2712%27%20stroke%3D%27%23A8ADC8%27%20stroke-width%3D%271%27%20stroke-dasharray%3D%2710%2C6%27%20stroke-dashoffset%3D%2763%27%20stroke-linecap%3D%27square%27/%3E%3C/svg%3E')] bg-no-repeat bg-[length:100%_100%]">
            <h2 className="uppercase text-gray-500 text-6xl font-semibold">soon</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-[220px] h-[138px]">
              <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-white border border-gray-300 rounded-xl shadow-[0px_1px_1px_rgba(29,44,83,0.06),_0px_3px_3px_rgba(29,44,83,0.04),_0px_7px_6px_rgba(29,44,83,0.03),_0px_12px_10px_rgba(29,44,83,0.01)]"></div>
              <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-white border border-gray-300 rounded-xl shadow-[0px_1px_1px_rgba(29,44,83,0.06),_0px_3px_3px_rgba(29,44,83,0.04),_0px_7px_6px_rgba(29,44,83,0.03),_0px_12px_10px_rgba(29,44,83,0.01)]"></div>
              <div className="col-start-3 col-end-4 row-start-1 row-end-3 bg-white border border-gray-300 rounded-xl shadow-[0px_1px_1px_rgba(29,44,83,0.06),_0px_3px_3px_rgba(29,44,83,0.04),_0px_7px_6px_rgba(29,44,83,0.03),_0px_12px_10px_rgba(29,44,83,0.01)]"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
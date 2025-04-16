import Image from "next/image";

import clsx from "clsx";

import { Container } from "@/components/core/container";
import { Card } from "@/components/atoms/card";
import { Hr } from "@/components/atoms/hr";
import { NextIcon } from "@/components/atoms/next-icon";

const skills: {
  title: string;
  highlights: string[];
  learning: boolean;
}[] = [
  {
    title: "Backend Development",
    highlights: [
      "Just to bring my projects to life",
    ],
    learning: true,
  },
  {
    title: "Web Development",
    highlights: [
      "Responsive development",
      "Efficient code",
      "Good documentations",
    ],
    learning: false,
  },
  {
    title: "UI&UX Design",
    highlights: [
      "Awesome interfaces",
      "Design systems",
      "Color theory",
    ],
    learning: false,
  },
  {
    title: "Motion Design",
    highlights: [
      "Spring animations",
      "Micro interactions",
      "Layout animations",
    ],
    learning: false,
  },
  {
    title: "SEO",
    highlights: [
      "Google friendly website",
      "Performance",
      "Accessibility",
    ],
    learning: false,
  },
];

export function Hero() {
  return (
    <Container className="relative pt-16 border-b border-gray-300">
      <div className="relative z-10 md:z-20 flex flex-col items-center justify-center w-full px-2 md:px-4">
        <div className="flex flex-col justify-center items-center w-full font-medium tracking-[-0.2em]">
          <h1 className="sr-only">I{"'"}m Gabriel Batista, a software engineer from Curitiba, Brasil!</h1>
          <h2 className="text-[10vw] md:text-7xl leading-none">Well, hello buddy</h2>
          <h2 className="text-black text-[10vw] md:text-7xl leading-none">I{"'"}m Gabriel Batista</h2>
        </div>
        <Image className="-mt-4 xs:-mt-6 md:-mt-8 pointer-events-none" src="/me.png" width={569} height={626} alt="" />
      </div>
      <div className="w-full px-4 pb-4 md:pl-4 md:pb-0 md:pr-0 md:absolute z-30 md:bottom-24 lg:bottom-48 md:w-96">
        <Card>
          <div className="flex items-center gap-2 md:gap-4 p-2">
            <div className="relative w-10 h-10">
              <div className="grid place-content-center absolute z-10 w-11 h-11 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl blur-sm">
                <div className="w-16 h-16 bg-gradient-to-b from-rose-500 to-blue-500 animate-spin-slow"></div>
              </div>
              <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-px rounded-lg bg-white/30">
                <div className="bg-black w-10 h-10 flex items-center justify-center p-2 text-white font-medium rounded-lg">
                  <span className="text-xl">4+</span>
                </div>
              </div>
            </div>
            <h2 className="text-black text-lg md:text-xl font-medium">Years of experience</h2>
          </div>
          <Hr />
          <div className="p-4">
            <p>As UI/UX Designer and Software Engineer passionate about crafting exceptional websites and applications. My goal is to create seamless user experiences and visually stunning designs that not only meet but exceed client expectations, ensuring they are thrilled with their product in production.</p>
          </div>
        </Card>
      </div>
      <div className="hidden md:block absolute z-20 lg:z-10 w-72 pr-4 pb-4 bottom-0 right-0">
        <Card>
          <div className="flex items-center gap-2 p-2 md:px-4">
            <NextIcon className="text-black" name="mdi:atom" size="lg" />
            <h2 className="text-black text-lg md:text-xl font-medium">Skills</h2>
          </div>
          <Hr />
          <div className="py-4 pr-4 pl-6">
            <ol className="flex flex-col gap-4 relative border-l border-dashed border-gray-300">
              {
                skills.map(skill => (
                  <li key={skill.title} className="flex flex-col ml-5">
                    <span 
                      className={clsx(
                        "absolute -start-[11px] w-5 h-5 flex items-center justify-center rounded-full ring-4 ring-white",
                        skill.learning ? "bg-blue-500" : "bg-emerald-500",
                      )}>
                      <NextIcon 
                        className={clsx(
                          "text-white",
                          skill.learning && "animate-spin",
                        )}
                        name={
                          skill.learning 
                            ? "mingcute:loading-fill" 
                            : "iconamoon:check-bold"
                        }
                        size="2xs" 
                      />
                    </span>
                    <h2 className="text-black font-medium leading-tight">{skill.title}</h2>
                    {
                      skill.highlights.map(highlight => (
                        <p key={highlight} className="text-sm">{highlight}</p>
                      ))
                    }
                  </li>
                ))
              }
            </ol>
          </div>
        </Card>
      </div>
    </Container>
  );
}
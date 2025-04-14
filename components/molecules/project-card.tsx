"use client";

import Link from "next/link";
import Image from "next/image";

import { type AnchorHTMLAttributes, useRef } from "react";

import { Badge } from "@/components/atoms/badge";
import { Card } from "@/components/atoms/card";

import { type ArrowSlideProps, ArrowSlide } from "@/components/molecules/arrow-slide";

export interface Project {
  title: string;
  description: string;
  stacks: string[];
  image: string;
  alt: string;
  link: string;
}

export interface ProjectCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  project: Project;
}

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  const ArrowSlideRef = useRef<ArrowSlideProps>(null);

  const handleTriggerAnimation = () => {
    ArrowSlideRef.current?.triggerAnimation();
  };

  return (
    <Link
      className="w-full h-full"
      key={project.title}
      href={project.link}
      target="_blank"
      onMouseEnter={() => handleTriggerAnimation()}
      {...props}
    >
      <Card className="flex flex-col gap-4 p-4 lg:p-8 w-full h-full hover:bg-transparent cursor-pointer">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-gray-800 text-xl md:text-2xl">{project.title}</h2>
          <ArrowSlide ref={ArrowSlideRef} />
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
  );
}
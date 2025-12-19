import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const tagColors: Record<string, string> = {
  JavaScript: "bg-yellow-200",
  TypeScript: "bg-blue-300",
  React: "bg-cyan-200",
  "React Native": "bg-indigo-200",
  Expo: "bg-gray-100",
  Next: "bg-gray-300",
  CSS: "bg-blue-200",
  HTML: "bg-orange-300",
  "Node.js": "bg-green-200",
  Git: "bg-red-200",
  Github: "bg-purple-200",
  TailwindCSS: "bg-teal-200",
  MongoDB: "bg-green-300",
  Bitbucket: "bg-blue-100",
  Python: "bg-yellow-300",
  Flask: "bg-yellow-100",
};

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  deployUrl: string;
  previewUrl: string;
  tags: string[];
}

const ProjectCard = ({
  image,
  title,
  description,
  deployUrl,
  previewUrl,
  tags
}: ProjectCardProps) => {
  return (
    <div className='bg-white rounded-2xl flex flex-col min-h-115 p-4 w-full max-w-100'>
      <div className="relative h-40 mb-2 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className='flex flex-wrap'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              text-black px-2 py-1 m-1 rounded-md text-xs sm:text-sm font-medium
              ${tagColors[tag] || "bg-gray-200 text-gray-800"} 
            `}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className='flex-1'>
        <h2 className='font-semibold text-base sm:text-lg'>{title}</h2>
        <p className='text-gray-700 text-sm sm:text-base'>{description}</p>
      </div>
      
      <div className='flex justify-around flex-row gap-2 mt-4'>
        <Link target='_blank' href={previewUrl} className="btn btn-responsive">
          <VscGithubAlt /> Código Fonte
        </Link>
        <Link target='_blank' href={deployUrl} className="btn btn-responsive">
          <FiExternalLink /> Prévia
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
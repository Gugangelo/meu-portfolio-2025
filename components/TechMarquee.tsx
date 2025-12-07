import Image from "next/image";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaWordpress,
  FaPython
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiVite
} from "react-icons/si";

export const techs = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: FaNode, name: "Node.js" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVite, name: "Vite" },
  { icon: FaPython, name: "Python" }
];

export default function TechCarousel() {
  return (
    <div className="w-4/5 m-auto overflow-hidden py-6">
      <div className="marquee gap-16">
        {[...techs, ...techs, ...techs, ...techs, ...techs, ...techs].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center">
              <Icon className="w-16 h-16" />
              <span className="text-sm mt-2 font-bold">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

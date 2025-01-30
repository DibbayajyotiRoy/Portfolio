import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.4rem] font-600">
              At NIELIT Agartala as Intern.
            </h4>
            <span className="text-blue-400 my-[10px]">2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built an App where teachers can send study materials for other
              students to easily access and read.
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1.4rem] font-600">
              Freelancing
            </h4>
            <span className="text-blue-400 my-[10px]">2023-present</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built many modern websites(like my portfolio is!)
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1.4rem] font-600">
              BreakThrough at Tripura StartUp Policy Launch!
            </h4>
            <span className="text-blue-400 my-[10px]">2025</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Check BloodLink at Projects Section for more information regarding
              the project, this incredible project where I developed the
              Front-end attracted many dignitaries, including the honorary C.M.
              of Tripura, Minister of I.T of Tripura.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.4rem] font-600">
              Elementary and Higher Education
            </h4>
            <span className="text-blue-400 my-[10px]">2022</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Graduated 12th STD. from prestigious Shishu Bihar H.S. School.
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] text-[1.4rem] font-600">
              Bachelor Degree
            </h4>
            <span className="text-blue-400 my-[10px]">2022-present</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Pursuing B.Tech CSE from ICFAI University,Tripura.
            </p>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

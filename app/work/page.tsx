"use client";

import TitledParagraph from "@/components/titled-paragraph";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface PageProps {}

const Page = ({}: PageProps) => {
  const [isTLDRShown, setIsTLDRShown] = useState(false);

  return (
    <main className="flex my-[140px] sm:my-[200px] justify-end sm:justify-center">
      <section className="max-w-[626px] pl-9 pr-6 sm:pl-0 sm:pr-0 sm:px-10">
        <h2 className="font-mono uppercase text-sm font-semibold opacity-25">
          application
        </h2>
        <h1 className="flex items-baseline flex-wrap sm:gap-3 my-2 sm:my-4 text-3xl sm:text-[32px] font-semibold">
          <span className="sm:w-auto w-full">Full Stack Software Engineer</span>
          <span className="opacity-50 w-full sm:w-auto text-[18px] sm:text-[22px]">Rust Enthusiast</span>
        </h1>
        <button
          onClick={() => {
            setIsTLDRShown(!isTLDRShown);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-base sm:sticky mt-6 sm:mt-0 sm:top-9 z-10 bg-white dark:bg-blackout border dark:border-whiteout/50 rounded-md px-2 py-0.5 border-blackout"
        >
          {!isTLDRShown
            ? "Too much text? show TLDR"
            : "More details? show everything"}
        </button>

        <div className="flex flex-col gap-6 sm:gap-8 mt-10 text-blackout/90 dark:text-whiteout/90">
          {isTLDRShown ? (
            <TitledParagraph title="TLDR">
              <div className="flex flex-col gap-2 sm:gap-3">
                <p>
                  I’m Dibbayajyoti, a Full Stack Developer based in Agartala, India. (
                  <Link href="https://linkedin.com/in/dibbayajyoti-roy/" target="_blank" className="underline font-semibold">LinkedIn</Link>
                  {" / "}
                  <Link href="https://github.com/DibbayajyotiRoy" target="_blank" className="underline font-semibold">GitHub</Link>
                  )
                </p>
                <p>
                  I specialize in frontend development with strong backend experience, using TypeScript, React, Next.js, and Rust to build production-ready systems.
                </p>
                <p>
                  Currently shipping production-grade SaaS platforms at Yupcha Softwares.
                </p>
                <p>Some projects you can check out:{" "}
                  <Link href="https://github.com/DibbayajyotiRoy/LunarSite" target="_blank" rel="noopener noreferrer" className="font-semibold underline">LunarSite</Link> (AI Lunar Mineral Prediction), {" "}
                  <Link href="https://github.com/DibbayajyotiRoy/BloodLink" target="_blank" rel="noopener noreferrer" className="font-semibold underline">BloodLink</Link> (Donor-Seeker Matching), {" "}
                  <Link href="https://github.com/DibbayajyotiRoy/Carbon-Tracker" target="_blank" rel="noopener noreferrer" className="font-semibold underline">CarbonFootprintTracker</Link> (AI Sustainability App), {" "}
                  <Link href="https://github.com/DibbayajyotiRoy/Rust-FullStack-App" target="_blank" rel="noopener noreferrer" className="font-semibold underline">EMS</Link> (Real-Time Employee Management System in Rust/React).
                </p>
                <p>
                  B.Tech in Computer Science candidate (2026). Winner of several national hackathons including NITA Arjuna 2.0.
                </p>
                <p>
                  I love building blazingly fast tools and infrastructure. I&apos;m always looking for opportunities to contribute to the Rust ecosystem or build production-grade systems that push the boundaries of performance!
                </p>
              </div>
            </TitledParagraph>
          ) : (
            <>
              <TitledParagraph title="what I do">
                <p>Hi, I&apos;m <Link href="https://linkedin.com/in/dibbayajyoti-roy/" target="_blank" className="underline font-semibold">Dibbayajyoti</Link>! I’m a Full Stack Software Engineer based in Agartala, India, currently working at{" "}
                  <span className="font-semibold">Yupcha Softwares Pvt. Ltd</span>. 
                  I focus on shipping production-grade SaaS platforms, integrating REST APIs, and building cutting-edge user-facing dashboards. 
                  Beyond engineering, I have a deep interest in web performance, Core Web Vitals, and modern design systems.
                </p>
              </TitledParagraph>

              <TitledParagraph title="experience">
                <p>
                  Since July 2025, I&apos;ve been working across engineering teams to automate operational workflows and build systems for HR, employee management, and AI-driven interviewing. 
                  I thrive on solving complex infrastructure problems and delivering seamless user experiences.
                </p>
              </TitledParagraph>

              <TitledParagraph title="projects">
                <div className="flex flex-col gap-5">
                  <p>
                    <Link href="https://github.com/DibbayajyotiRoy/LunarSite" target="_blank" rel="noopener noreferrer" className="font-semibold underline">LunarSite</Link>: Built an AI-based prediction system for lunar mineral composition using ML pipelines during a NITA-ISRO hackathon.
                  </p>
                  <p>
                    <Link href="https://github.com/DibbayajyotiRoy/BloodLink" target="_blank" rel="noopener noreferrer" className="font-semibold underline">BloodLink</Link>: Developed a matching platform for blood donors and seekers with real-time discovery and registration workflows.
                  </p>
                  <p>
                    <Link href="https://github.com/DibbayajyotiRoy/Carbon-Tracker" target="_blank" rel="noopener noreferrer" className="font-semibold underline">CarbonFootprintTracker</Link>: An AI-powered sustainability app that calculates individual emissions and provides smart recommendations.
                  </p>
                  <p>
                    <Link href="https://github.com/DibbayajyotiRoy/Rust-FullStack-App" target="_blank" rel="noopener noreferrer" className="font-semibold underline">EMS</Link>: A real-time Employee Management System built with <span className="italic">Rust and React</span>, featuring payroll and policy-based management.
                  </p>
                </div>
              </TitledParagraph>

              <TitledParagraph title="skills">
                <p>
                  I&apos;m proficient in TypeScript, React, Next.js, and Node.js. On the backend I work with Rust, Python (FastAPI), and Go for performance-critical and scalable services.
                  I also explore HonoJS and ElysiaJS, use Docker for containerization, and Git/Linux daily. I believe that a new framework a day keeps stagnation away.
                </p>
              </TitledParagraph>

              <TitledParagraph title="honors">
                <p>
                  I&apos;ve been fortunate to win several competitions, including the NITA Arjuna 2.0 National Hackathon (2025) and the Technovate Project Exhibition. 
                  I was also the 1st Runner-Up in the NITA–ISRO Space Hackathon (2024).
                </p>
              </TitledParagraph>

              <TitledParagraph title="My Focus">
                <p>
                  My goal is to build software that is both robust and efficient. Rust has completely transformed my approach to engineering, moving me from just building &quot;web apps&quot; to designing reliable systems. 
                  I&apos;d love to contribute to core infrastructure projects, high-performance engines, or any challenge that requires deep technical precision.
                </p>
              </TitledParagraph>
              
              <hr className="border-blackout dark:border-whiteout opacity-25" />

              <TitledParagraph title="About Me">
                <p>
                  I started my journey with a curiosity for how things are built, which led me to a B.Tech in Computer Science at ICFAI University Tripura. 
                  Web development allows me to design things and share them with anyone, anywhere, instantly. Web always wins.
                </p>
              </TitledParagraph>

              <hr className="border-blackout dark:border-whiteout opacity-25" />

              <TitledParagraph title="Why Rust?">
                <p>
                  I have a deep appreciation for <span className="font-semibold">Rust</span> as a systems programming language. 
                  It&apos;s truly a Swiss Army knife—whether it&apos;s low-level hardware control, building high-performance 3D game engines, or developing blazingly fast backend services, Rust delivers both safety and speed without compromise.
                </p>
                <p className="mt-4">
                  The strict compiler, the ownership model, and the zero-cost abstractions make it a joy to work with once you master it. 
                  I believe Rust is the future of infrastructure, and I&apos;m constantly exploring its potential in edge computing and real-time systems.
                </p>
              </TitledParagraph>
            </>
          )}
          <p className="text-base sm:text-lg my-10 sm:my-20">
            Thanks for reading this. Love your work, keep it up!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;

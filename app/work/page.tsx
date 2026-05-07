import type { Metadata } from "next";
import WorkContent from "@/components/work-content";

export const metadata: Metadata = {
  title: "Work & Projects – Dibbayajyoti Roy",
  description: "Full Stack Engineer at Yupcha Softwares. Built Klinder-OSS (open-source analytics SDK on Cloudflare Workers), Learning Copilot (AWS Bedrock AI assistant, top 500 AI for Bharat hackathon), and BloodLink. Winner NITA Arjuna 2.0 hackathon 2025.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Projects – Dibbayajyoti Roy",
    description: "Full Stack Engineer at Yupcha Softwares. Projects: Klinder-OSS, Learning Copilot (AWS Bedrock), BloodLink. Hackathon winner. TypeScript, Rust, React, Next.js.",
    url: "https://dibbayajyoti.com/work",
  },
};

export default function WorkPage() {
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
        <WorkContent />
      </section>
    </main>
  );
}

import Image from "next/image";
import ColourfulText from "@/components/ui/colourful-text.jsx";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <a href="/">
          <Image
            src="/images/logo.png"
            width={120}
            height={80}
            className="max-h-[80px] h-full object-contain object-center"
            alt="logo"
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0]">It&apos;s Me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Dibbayajyoti Roy, <br /> <ColourfulText text="Web Developer" />.
          </h2>
          <a
            href="#"
            className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font=[600]"
          >
            Hire Me &rarr;
          </a>
        </div>
      </div>

      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src="/images/model.png"
          width={800}
          height={1200}
          className="w-full max-h-[90vh] object-contain object-bottom"
          alt="model"
        />
      </div>

      <div></div>
    </div>
  );
}

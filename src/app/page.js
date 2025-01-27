import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <a href="/">
          <Image src="/images/logo.png" width={120} height={80} className="max-h-[80px] h-full object-contain object-center" alt="logo"/>
        </a>
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

import { Github } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const font = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div
      className={`${font.className} flex w-screen relative h-[calc(100vh-7vh)] items-center justify-between px-[7%] sm:pt-[calc(15vh)]`}
    >
      <div className="shape1 -z-10"></div>
      <div className="left flex flex-col gap-2 w-1/2">
        <h1 className="text-5xl font-semibold">
          AI版本的富文本编辑器，像Notion一样，by{" "}
          <span className="text-[#f02e65]">鲜贝英语</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          学习英语的好帮手
        </p>
        <div className="button-wrapper flex items-center mt-5 gap-3">
          <Link href="/login">
            <button className="bg-black hover:bg-black/70 text-gray-100 px-5 text-sm py-3 rounded-full">
              <span className="text-[#f02e65]">开始学习</span>
            </button>
          </Link>
          {/* <button className="bg-orange-700 hover:bg-orange-700/70 px-5 flex items-center gap-2 text-sm py-2 rounded-full">
            <Github size={16} />
            Star on Github{" "}
          </button> */}
        </div>
      </div>
      <div className="right w-1/2">
        <img src="/hero-image.svg" alt="" />
      </div>
    </div>
  );
}

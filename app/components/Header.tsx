"use client";

import Logo from "@/ui/Logo";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [stars, setStars] = React.useState(0);
  const { theme: currentTheme, setTheme } = useTheme();

  React.useEffect(() => {
    fetch("https://api.github.com/repos/NiazMorshed2007/appwrite-writer")
      .then((res) => res.json())
      .then((res) => {
        setStars(res.stargazers_count);
      });
  }, []);
  return (
    <header
      className={`${inter.className} w-full header backdrop-blur-sm z-50 py-5 fixed top-0 left-0 flex items-center justify-between px-[7%]`}
    >
      <Logo />
      <nav className="flex items-center gap-7">
        <button
          className="rounded-full w-[34px] flex items-center justify-center p-0 h-[34px]"
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          <SunIcon
            size={20}
            className="rotate-0 text-xl scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <MoonIcon
            size={20}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;

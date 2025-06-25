"use client";

import modeLogo from "@/components/svg/mode.svg";
import { useTheme } from "next-themes";

import Image from "next/image";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={handleToggle}
      variant='secondary'
      size='sm'>
      <span className='sr-only'>Toggle theme</span>
      <Image
        src={modeLogo}
        alt='Mode'
        className='size-4 dark:invert'
      />
      Change Theme
    </Button>
  );
}

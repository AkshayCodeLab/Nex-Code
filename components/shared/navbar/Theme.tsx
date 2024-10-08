"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { theme } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900 data-[state=open]:bg-light-900 
        dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200"
        >
          {mode === "light" ? (
            <Image
              src={"/assets/icons/sun.svg"}
              alt="sun"
              width={20}
              height={20}
              className="active-theme cursor-pointer"
            />
          ) : (
            <Image
              src={"/assets/icons/moon.svg"}
              alt="moon"
              width={20}
              height={20}
              className="active-theme cursor-pointer"
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className="absolute
        -right-12 mt-3 min-w-[120px]
        rounded border py-2 
        dark:border-dark-400 dark:bg-dark-300"
        >
          {theme.map((item) => {
            return (
              <MenubarItem
                key={item.value}
                className="flex cursor-pointer items-center gap-4 p-2 dark:bg-dark-300"
                onClick={() => {
                  setMode(item.value);

                  if (item.value !== "system") {
                    localStorage.theme = item.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  height={16}
                  width={16}
                  className={mode === item.value ? "active-theme" : ""}
                />
                <p
                  className={`body-semibold text-light-500 ${mode === item.value ? "active-theme text-primary-500" : "text-dark100_light900"}`}
                >
                  {item.label}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;

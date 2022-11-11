import Link from "next/link";
import React from "react";
import { ICONS } from "../constants";

const NavHeader = ({
  toggleDarkMode,
  darkMode,
  title,
}: {
  toggleDarkMode: () => void;
  darkMode: boolean;
  title?: string;
}) => {
  const style = {
    li: "text-light_text_s dark:text-dark_text_s hover:text-light_text_p dark:hover:text-dark_text_p py-2 px-4 capitalize cursor-pointer",
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <Link href={"/"} className="text-2xl cursor-pointer">
          {ICONS.back}
        </Link>
        <span className="text-light_text_p dark:text-dark_text_p text-lg ml-4">
          {title}
        </span>
      </div>

      <span className={style.li} onClick={toggleDarkMode}>
        {darkMode ? ICONS.moon : ICONS.sun}
      </span>
    </div>
  );
};

export default NavHeader;

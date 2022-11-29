import Link from "next/link";
import { ICONS } from "../constants";

export const Header = ({
  toggleDarkMode,
  darkMode,
}: {
  toggleDarkMode: () => void;
  darkMode: boolean;
}) => {
  const style = {
    li: "text-light_text_s dark:text-dark_text_s hover:text-light_text_p dark:hover:text-dark_text_p py-2 px-4 capitalize cursor-pointer",
  };

  return (
    <div>
      <ul className="w-full flex items-center justify-end">
        {/* <li className={style.li}>
          <Link href="/rockPaperScissors">Rock,Paper,Scissors</Link>
        </li> */}
        {/* <li className={style.li}>download resume</li> */}
        <li className={style.li}>
          <a
            href="https://github.com/sreeharims98/my-portfolio"
            target="_blank"
          >
            source_code
          </a>
        </li>
        <li className={style.li} onClick={toggleDarkMode}>
          {darkMode ? ICONS.moon : ICONS.sun}
        </li>
      </ul>
    </div>
  );
};

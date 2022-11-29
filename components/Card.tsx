import { StaticImageData } from "next/image";

interface CardProps {
  img?: StaticImageData;
  icon?: JSX.Element;
  text: string;
  link?: string;
}
const Card = ({ img, icon, text, link }: CardProps) => {
  return (
    <a
      href={link ? link : ""}
      target={link ? "_blank" : "_self"}
      rel="noreferrer"
      className="bg-light_bg_s dark:bg-dark_bg_s border-light_bg_s dark:border-dark_bg_s hover:border-light_text_p dark:hover:border-dark_text_p flex items-center justify-center  border  w-full p-2 rounded cursor-pointer group transition"
    >
      <div className="mr-2  w-5 h-5">
        {img ? (
          <img src={img.src} alt="" className="w-full h-full object-contain" />
        ) : (
          icon
        )}
      </div>
      <span className="text-light_text_s dark:text-dark_text_s group-hover:text-light_text_p dark:group-hover:text-dark_text_p text-md font-medium ">
        {text}
      </span>
    </a>
  );
};

export default Card;

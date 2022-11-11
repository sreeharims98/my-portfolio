import Image, { StaticImageData } from "next/image";

interface PositionListProps {
  img?: StaticImageData;
  position: string;
  company: string;
  date: string;
  link?: string;
}

const PositionList = ({
  img,
  position,
  company,
  date,
  link,
}: PositionListProps) => {
  return (
    <div className="flex items-center">
      {img && (
        <a href={link ? link : ""} target="_blank" className="w-16 h-16 mr-4">
          <Image src={img} alt="" className="w-full h-full object-contain" />
        </a>
      )}
      <div className="flex flex-col">
        <span className="text-light_text_p dark:text-dark_text_p text-md font-medium ">
          {position}
        </span>
        <span className="text-light_text_s text-md text-desc hidden sm:flex">
          {company + " | " + date}
        </span>
        <span className="text-light_text_s text-md text-desc flex sm:hidden">
          {company}
        </span>
        <span className="text-light_text_s text-md text-desc flex sm:hidden">
          {date}
        </span>
      </div>
    </div>
  );
};

export default PositionList;

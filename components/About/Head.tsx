import { StaticImageData } from "next/image";
import { data } from "../../data";

interface IDataPersonal {
  image: StaticImageData;
  name: string;
  jobs: string[];
  place: string;
  exp: string;
  current_position: string;
  current_company_name: string;
}
const Thedata: IDataPersonal = data.personal;

const style = {
  li: "text-light_text_s dark:text-dark_text_s flex items-center text-sm mr-2",
};

const Head = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="w-full flex items-center justify-center md:w-fit md:items-start md:justify-start">
        <img
          src={Thedata.image.src}
          alt=""
          className="w-24 h-24 rounded-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-fit">
        <span className="text-light_text_p dark:text-dark_text_p mb-3 font-bold text-3xl w-full flex items-center justify-center md:w-fit md:items-start md:justify-start text-center">
          {Thedata.name}
        </span>
        <span className="text-light_text_s dark:text-dark_text_s mb-3 flex flex-wrap w-full items-center justify-center md:w-fit md:items-start md:justify-start flex-col md:flex-row text-center">
          {Thedata.jobs.map((j) => (
            <span className="mr-4" key={j}>
              {j}
            </span>
          ))}
        </span>
        <div className="flex flex-wrap w-full items-center justify-center flex-col md:flex-row md:w-fit md:items-start md:justify-start text-center">
          <div className={style.li}>
            {/* <MdLocationPin /> */}
            <span className="mr-4">{Thedata.place}</span>
          </div>
          <div className={style.li}>
            {/* <MdAnalytics /> */}
            <span className="mr-4">{Thedata.exp}</span>
          </div>
          <div className={style.li}>
            {/* <MdWork /> */}
            <span className="mr-4">
              {Thedata.current_position}{" "}
              <b className="uppercase">@ {Thedata.current_company_name}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

import { data } from "../../data";

const AboutMe = () => {
  return (
    <div className="">
      <div className="custom_title">{data.about.title}</div>
      <div>
        <span className="text-light_text_p dark:text-dark_text_p  text-2xl">
          {data.about.about.title}
        </span>
        <p
          className="text-light_text_s text-md mt-4"
          dangerouslySetInnerHTML={{ __html: data.about.about.desc }}
        ></p>
      </div>
    </div>
  );
};

export default AboutMe;

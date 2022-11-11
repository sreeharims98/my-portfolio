import Card from "../Card";
import { data } from "../../data";

const Skills = () => {
  return (
    <div className="">
      <div className="custom_title">{data.skills.title}</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {data.skills.skills.map((s) => (
          <Card key={s.name} img={s.logo} text={s.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

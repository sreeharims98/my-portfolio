import PositionList from "../PositionList";
import { data } from "../../data";

const Education = () => {
  return (
    <div className="">
      <div className="custom_title">{data.education.title}</div>
      <div className="flex flex-col gap-8">
        {data.education.education.map((e) => (
          <PositionList
            key={e.position}
            position={e.position}
            company={e.institution}
            date={e.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;

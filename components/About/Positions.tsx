import PositionList from "../PositionList";
import { data } from "../../data";

const Positions = () => {
  return (
    <div className="">
      <div className="custom_title">{data.positions.title}</div>
      <div className="flex flex-col gap-8">
        {data.positions.positions.map((p) => (
          <PositionList
            key={p.position}
            img={p.logo}
            position={p.position}
            company={p.company}
            date={p.date}
            link={p?.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Positions;

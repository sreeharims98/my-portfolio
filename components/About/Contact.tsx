import Card from "../Card";
import { data } from "../../data";

const Contact = () => {
  return (
    <div>
      <div className="custom_title">{data.contact.title}</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {data.contact.contact.map((c) => (
          <Card key={c.name} img={c.logo} text={c.name} link={c.link} />
        ))}
      </div>
    </div>
  );
};

export default Contact;

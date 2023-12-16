import Title from "./Title";
import Movies from "./Movies";

const Section = (props) => {
  return (
    <section>
      <Title category={props.category} />
      <Movies images={props.images} />
    </section>
  );
};

export default Section;

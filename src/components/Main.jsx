import movies from "../assets/movies_rnexgr.json";
import Section from "./Section";

const Main = () => {
  return (
    <main className="container">
      {movies.map((elt, ind) => {
        return (
          <Section category={elt.category} images={elt.images} key={ind} />
        );
      })}
    </main>
  );
};

export default Main;

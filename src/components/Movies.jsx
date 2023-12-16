const Movies = (props) => {
  const images = props.images;
  return (
    <div className="images-div">
      <div>
        {images.map((image) => {
          return <img src={image} alt="Movie image" />;
        })}
      </div>
    </div>
  );
};

export default Movies;

let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

export const NasaPictureOfTheDay = ({ loadData }) => {
  loadData(url);
  console.log(pictureData);
  return (
    <>
      <h1>NASA APOD</h1>
      <h2>{pictureData.title}</h2>
    </>
  );
};

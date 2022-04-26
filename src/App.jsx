import "./App.scss";
import { NasaPictureOfTheDay } from "./components/NasaPictureOfTheDay";

let pictureData;

const loadData = (url) => {
  (async () => {
    const response = await fetch(url);
    pictureData = await response.json();
  })();
};

function App() {
  return (
    <div className="App">
      <NasaPictureOfTheDay loadData={loadData} />
    </div>
  );
}

export default App;

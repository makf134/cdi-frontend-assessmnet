import "./App.css";
import photo1 from "../src/assets/photo1.jpg";
import photo2 from "../src/assets/photo2.jpg";
import photo3 from "../src/assets/photo3.jpg";
import { useState } from "react";

function App() {
  const imgsArr = [photo1, photo2, photo3];
  const [selectedImg, setSelectedImg] = useState(photo1);
  function handleSelectedImg(idx) {
    setSelectedImg(imgsArr[idx]);
  }
  function handleNextImg() {
    const imgIdx = imgsArr.indexOf(selectedImg);
    if (imgIdx < 2) {
      setSelectedImg(imgsArr[imgIdx + 1]);
    }
  }
  function handlePrevImg() {
    const imgIdx = imgsArr.indexOf(selectedImg);
    if (imgIdx > 0) {
      setSelectedImg(imgsArr[imgIdx - 1]);
    }
  }

  return (
    <div className="App">
      <div className="gallery-container">
        <div className="selected-img-container">
          <img src={selectedImg} className="selected-imgs" />
        </div>
        <div className="gallery-display">
          {imgsArr.map((curr, idx) => {
            return (
              <img
                src={curr}
                className="gallery-imgs"
                onClick={() => handleSelectedImg(idx)}
              />
            );
          })}
        </div>
        <div className="buttons-container">
          <button onClick={handlePrevImg} className="btn">
            prev
          </button>
          <button onClick={handleNextImg} className="btn">
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

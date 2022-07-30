import { useState } from "react";
import SliderStore from "../../../store/SliderStore";

const Slider = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="spoiler">
      <div
        className="spoiler__title"
        onClick={() => {
          setSelected(selected ? "" : "open");
        }}
      >
        <div className="spoiler__title-wrapper">
          <div className="spoiler__title-text">{SliderStore.title}</div>
          <div className={"spoiler__title-arrow " + selected}></div>
        </div>
      </div>
      <div className={"spoiler__slider " + selected}>
        <div className="spoiler__slider-slider">
          <img className="card" src={SliderStore.img[2][0]} alt="active" />
          <img
            className="card card-left"
            src={SliderStore.img[1][0]}
            alt="left"
          />
          <img
            className="card card-right"
            src={SliderStore.img[3][0]}
            alt="right"
          />
          <img
            className="card card-2left"
            src={SliderStore.img[0][0]}
            alt="left"
          />
          <img
            className="card card-2right"
            src={SliderStore.img[4][0]}
            alt="right"
          />
        </div>
      </div>
      <div className="my_hr"></div>
    </div>
  );
};

export default Slider;

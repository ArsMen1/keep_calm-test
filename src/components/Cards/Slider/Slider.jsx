import SliderStore from "../../../store/SliderStore";

const Slider = () => (
  <div className="spoiler">
    <div className="spoiler__title">
      <div className="spoiler__title-wrapper">
        <div className="spoiler__title-text">{SliderStore.title}</div>
        <div className="spoiler__title-arrow"></div>
      </div>
    </div>
    <div className="spoiler__slider">
      {/* img={el.img} */}
      {/* <span>{el.description}</span> */}
    </div>
  </div>
);

export default Slider;

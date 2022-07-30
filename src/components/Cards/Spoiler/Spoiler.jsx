import { useState } from "react";
import SpoilerStore from "../../../store/SpoilerStore";

const Spoiler = () => {
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
          <div className="spoiler__title-text">{SpoilerStore.title}</div>
          <div className={"spoiler__title-arrow " + selected}></div>
        </div>
      </div>
      <div className={"spoiler__photo " + selected}>
        {SpoilerStore.data.map((el) => (
          <>
            <div className="spoiler__photo-photo">
              <img src={el.img} alt="photo" />
            </div>
            <p className="spoiler__photo-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="spoiler__photo-description">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </>
        ))}
      </div>
    <div className="my_hr"></div>

    </div>
  );
};

export default Spoiler;

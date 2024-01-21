import styles from "./carousel.module.css";
function Dots({ activeIndex, onclick, imageSlider }) {
  return (
    <div className={`${styles.all_dots}`}>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${styles.dot} ${
            activeIndex === index ? styles["active_dot"] : ""
          }`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;

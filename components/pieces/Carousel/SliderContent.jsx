import Image from "next/legacy/image";
import styles from "./carousel.module.css";
function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex
              ? `${styles.slides} ${styles.active}`
              : `${styles.inactive}`
          }
        >
          <Image
            className={`${styles.slide_image}`}
            src={slide.urls}
            alt="img"
          />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;

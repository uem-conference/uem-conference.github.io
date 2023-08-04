import SliderContent from "./SliderContent";
import imageSlider from "./ImageSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";
import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";
const len = imageSlider.length - 1;

function Slider() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [activeIndex, isPaused]);

	const handleHover = (hovered) => {
		setIsHovered(hovered);
	};

	const handleResumePause = () => {
		setIsPaused(!isPaused);
	};

	return (
		<div
			className={`${styles.slider_container}  background`}
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
		>
			<SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
			{isHovered && (
				<>
					<Arrows
						prevSlide={() =>
							setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
						}
						nextSlide={() =>
							setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
						}
					/>
					<div className={`${styles.resume_pause}`} onClick={handleResumePause}>
						{isPaused ? (
							<Image
								style={{ filter: "brightness(0) invert(1)" }}
								src="/assets/icons/play.png"
								alt="menu"
								width={30}
								height={30}
							></Image>
						) : (
							<Image
								style={{ filter: "brightness(0) invert(1)" }}
								src="/assets/icons/pause.png"
								alt="menu"
								width={30}
								height={30}
							></Image>
						)}
					</div>
				</>
			)}
			<Dots
				activeIndex={activeIndex}
				imageSlider={imageSlider}
				onclick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
		</div>
	);
}

export default Slider;

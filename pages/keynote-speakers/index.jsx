import React, { useEffect } from 'react'
import {Heading} from "../../components/pieces"

function KeynoteSpeakers() {
	useEffect(() => {
		document.title = "Keynote Speakers | " + process.env.app_name;
	}, []);
	return (
		<>
			<Heading text={"Keynote Speakers"} class={"mb--2"}></Heading>
		<div className="content-container">
		</div>
		</>
	);
}

export default KeynoteSpeakers;

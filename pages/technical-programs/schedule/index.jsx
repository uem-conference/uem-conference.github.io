import React, { useEffect } from 'react'
import {Heading} from "../../../components/pieces"

function Schedule() {
	useEffect(() => {
		document.title = "Schedule | " +"ICACS";
	}, []);
	return (
		<>
			<Heading text={"Schedule"} class={"mb--2"}></Heading>
		<div className="content-container">
		</div>
		</>
	);
}

export default Schedule;
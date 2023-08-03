import React, { useEffect } from 'react'
import {Heading} from "../../../components/pieces"

function AcceptedAndRegisteredPapers() {
	useEffect(() => {
		document.title = "Accepted And Registered Papers | " +"ICACS";
	}, []);
	return (
		<>
			<Heading text={"Accepted And Registered Papers"} class={"mb--2"}></Heading>
		<div className="content-container">
		</div>
		</>
	);
}

export default AcceptedAndRegisteredPapers;

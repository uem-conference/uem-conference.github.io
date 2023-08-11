import React, { useEffect } from 'react'
import {Heading} from "../../../components/pieces"

function AcceptedAndRegisteredPapers() {
	useEffect(() => {
		document.title = "Accepted And Registered Papers | Techinical Programs | " + process.env.app_name;
	}, []);
	return (
		<>
			<Heading text={"Accepted And Registered Papers"} class={"mb--2"}></Heading>
		<div className="content-container">
		<h3 className=" heading heading--2 sub-title"><center>To be updated</center></h3>
		</div>
		</>
	);
}

export default AcceptedAndRegisteredPapers;

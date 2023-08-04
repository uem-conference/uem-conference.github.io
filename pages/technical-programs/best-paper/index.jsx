import React, { useEffect } from 'react'
import {Heading} from "../../../components/pieces"

function BestPaper() {
	useEffect(() => {
		document.title = "Best Paper | Techinical Programs | " +process.env.app_name;
	}, []);
	return (
		<>
			<Heading text={"Best Paper"} class={"mb--2"}></Heading>
		<div className="content-container">
		</div>
		</>
	);
}

export default BestPaper;

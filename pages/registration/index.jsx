import React, { useEffect } from 'react'
import {Heading} from "../../components/pieces"

const RegistrationPage = () => {
	useEffect(() => {
		document.title = "Registration | " + process.env.REACT_APP_TITLE;
	}, []);
	return (
		<>
    <style jsx>{`
    .registration-page {
      /* width: 100%; */
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .registration-page > * {
      width: 100%;
    }
    
    
    @media screen and (max-width: 768px) {
      
    }
    
    @media screen and (max-width: 450px) {
      /* .registration-page{
        padding: 2rem;
      } */
    }
    `}</style>
			<Heading
				text={"Registration Policy"}
				class={"mb--2 invalid-selection"}
			></Heading>
			<div className="registration-page content-container">
				<p className="text text--normal mb--1">
					According to the AdComSys 2024 conference registration policy, after
					obtaining the formal acceptance by e-mail, at least one author of each
					paper must complete registration formalities including payment of full
					registration fees.
				</p>

				<table border={"0"} className="table my--2">
					<thead className="table__head heading">
						<tr className="table__row">
							<th className="table__heading">Category</th>
							<th className="table__heading">
								Registration fees for Indian Author
							</th>
							<th className="table__heading">
								Registration fees for foreigner
							</th>
						</tr>
					</thead>
					<tbody className="table__body text text--normal">
						<tr className="table__row">
							<td className="table__data">Regular Author Academician</td>
							<td className="table__data">INR 4000</td>
							<td className="table__data">150 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Regular Author from Industry</td>
							<td className="table__data">INR 6000</td>
							<td className="table__data">200 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Regular Author Student (Phd)</td>
							<td className="table__data">INR 4000</td>
							<td className="table__data">150 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Regular Author Student (PG)</td>
							<td className="table__data">INR 3500</td>
							<td className="table__data">120 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Regular Author Student (UG)</td>
							<td className="table__data">INR 3500</td>
							<td className="table__data">120 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Extra Paper</td>
							<td className="table__data">INR 2500</td>
							<td className="table__data">100 USD</td>
						</tr>
						<tr className="table__row">
							<td className="table__data">Only Attending or Accompanying</td>
							<td className="table__data">INR 1500</td>
							<td className="table__data">90 USD</td>
						</tr>
					</tbody>
				</table>

				<p className="text text--normal mb--1">
					Final submissions can only be uploaded with regular registration and
					at least one author of each paper must register at the regular rate.
				</p>
				<p className="text text--normal mb--1">
					This fee is only applicable for single author from each paper who will
					be coming to present his/her paper in the respective venue of the
					conference. For each paper, if more than one author will come to
					present the paper then INR 2000 (Indian author) or 100 USD(for the
					foreign author) will be paid by each author at the conference venue
					(this includes registration kit, breakfast, and lunch coupon for three
					days of the conference ).
				</p>
				<p className="text text--normal mb--1">
					The above registration fees include tickets for the meals (Admission
					in opening ceremony, registration kit, breakfasts and lunches) for
					each author and one copy of the proceeding on a pen drive.
				</p>

				<h4
					className="heading heading--3 mb--1"
					style={{ textTransform: "uppercase" }}
				>
					Paper Registration Link
				</h4>

				<p className="text text--normal mb--1">
					To register your Paper please <a href="/">Click here.</a>
				</p>

				<p className="text text--normal mb--1">
					After your paper get registered, the author will get an auto-generated
					e-mail, the auto-generated e-mail consist of an invoice having the
					amount you have paid to register your paper. Author has to e-mail that
					invoice to conference e-mail id (adcomsys@uem.edu.in) along with their
					paper id and paper title. If any author will not send the invoice to
					the conference email-id then their registration will not be granted or
					treated as invalid.
				</p>

				<h4
					className="heading heading--3 mb--1"
					style={{ textTransform: "uppercase" }}
				>
					Cancellation Policy
				</h4>

				<p className="text text--normal mb--1">
					There will be no cancellation after Registration
				</p>
			</div>
		</>
	);
};

export default RegistrationPage;

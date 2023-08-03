import { useEffect } from "react";
// import "./aboutuem.css";
import { Heading } from "../../components/pieces";


export default function AboutUem() {
	useEffect(() => {
		document.title = "About UEM | " + "ICACS";
	}, []);
	return (
		<>
    <style jsx>{`
    .about-uem {
      background-image: var(--color-primary-light);
      margin-bottom: 20px;
    }
    
    .about-uem-content {
      margin: 0 auto;
    }
    .title {
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .description {
      margin-bottom: 20px;
    }
    
    .sub-title {
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    
    .list-item {
      list-style-type: none;
      padding-left: 20px;
      color: var(--pure-black);
      background-image: url(../../assets/icons//dot-2.png);
      background-repeat: no-repeat;
      background-size: 8px;
      background-position: left top;
      background-position-x: 0px;
      background-position-y: 6px;
    }
    
    .list {
      margin-left: 20px;
      padding-left: 20px;
    }
    
    .sub-list {
      list-style-type: none;
      color: var(--pure-black);
    }
    .sub-list li {
      margin-left: 20px;
      padding-left: 20px;
      background-image: url(../../assets/icons/dot-1.png);
      background-repeat: no-repeat;
      background-size: 5px;
      background-position: left top;
      background-position-x: 2px;
      background-position-y: 6px;
    }
    .section {
      margin-bottom: 60px;
    }
    
    .vision,
    .mission {
      margin-bottom: 30px;
    }
    
    .library .list-item {
      margin-bottom: 10px;
    }
    
    .student-chapters .list-item {
      margin-bottom: 10px;
    }
    
    .faculty .description {
      margin-bottom: 10px;
    }
    
    .about-uem-content h2.sub-title {
      border-bottom: 2px solid #333;
      padding-bottom: 10px;
    }
    
    .about-uem-content ul.sub-list {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    
    .about-uem-content ul.sub-list li {
      margin-bottom: 5px;
    }
    
    .about-uem-content ul.sub-list li:before {
      margin-right: 5px;
    }
    
    .about-uem-content ul.list {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    
    .about-uem-content ul.list li {
      margin-bottom: 5px;
    }
    
    .about-uem-content ul.list li:before {
      margin-right: 5px;
    }
    
    .about-uem-content .description {
      color: var(--pure-black);
    }
    
    .about-uem-content .description a:hover {
      text-decoration: underline;
    }
    
    /* Responsive Styles */
    
    @media (max-width: 768px) {
      .title {
        font-size: 28px;
      }
    
      .description {
        font-size: 16px;
        margin-bottom: 15px;
      }
    
      .sub-title {
        font-size: 24px;
      }
    
      .list-item {
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
    
    @media (max-width: 576px) {
      .title {
        font-size: 24px;
        margin-bottom: 15px;
      }
    
      .description {
        font-size: 14px;
        margin-bottom: 15px;
      }
    
      .sub-title {
        font-size: 20px;
      }
    
      .list-item {
        font-size: 12px;
        margin-bottom: 5px;
      }
    
      .section {
        margin-bottom: 30px;
      }
    
      .about-uem-content {
        padding: 20px;
      }
    }
    
    `}</style>
			<Heading
				text={"Welcome to UEM Kolkata"}
				class={"mb--2 invalid-selection"}
			></Heading>
			<div className="content-container">
				<section className="about-uem">
					<div className="about-uem-content">
						{/* <h1 className="title heading heading--2">Welcome to UEM Kolkata</h1> */}

						<p className=" text-2 text--normal description">
							University of Engineering &amp; Management (UEM) aims to provide
							an international ambience and exposure with innovative teaching
							techniques and courses which are tailor-made (technical &amp; soft
							skills) for the job market giving the students the winning edge
							and competitive advantage during placements.
						</p>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Who we are</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">
								UEM Kolkata has won "AAA" category (first 10 institutes
								nationally among all institutes of India including all IITs and
								NITs) in NPTEL program (IIT Kharagpur and IIT Chennai)
							</li>
							<li className="list-item">
								UEM Kolkata student has stood 1st amongst all students of India
								in NPTEL program
							</li>
							<li className="list-item">
								UEM Kolkata and UEM Jaipur organized UEMCON-2016 in Columbia
								University, New York, USA in association with IEEE New York,
								IEEE USA and IEEE Region 1
							</li>
							<li className="list-item">
								Highest salary offer at UEM Kolkata is Rs 72 lakhs per annum.
							</li>
							<li className="list-item">
								The University is a partner institution in the prestigious
								European Union sponsored project 'FRACTION' &amp; 'UNNAT BHARAT
								ABHIYAAN' of Govt. of India.
							</li>
							<li className="list-item">
								UEMK has been recognised in the band "Performer" under the
								category "University &amp; Deemed to be University (Private/Self
								Financed) (Technical)" in ATAL RANKING OF INSTITUTIONS ON
								INNOVATION ACHIEVEMENTS (ARIIA) 2021, a flagship program of the
								Ministry of Education, Government of India.
							</li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">
							Vision Mission Values
						</h2>
						<div className="vision">
							<h3 className=" heading heading--4 sub-title">Vision</h3>
							<p className=" text-2 text--normal description">
								To be a globally recognized educational institution known for
								outcome based education and application oriented research.
							</p>
						</div>
						<div className="mission">
							<h3 className=" heading heading--4 sub-title">Mission</h3>
							<p className=" text-2 text--normal description">
								To assist students to understand and enjoy seamless nature of
								knowledge and encourage them to apply acquired knowledge to
								practical use, so that they become worthy, socially responsible
								good human beings sought after their leadership qualities. To
								foster creativity, innovation and excellence through example
								based teaching-learning process imparted in the most simple and
								easily comprehensible way. To continuously upgrade knowledge
								base of our man power, improve infrastructure and use of latest
								technology/ pedagogical tools, and update curriculum through
								periodic feedback from stakeholders to enable students to meet
								professional requirements and their expectations.
							</p>
						</div>
						<div className="vision">
							<h3 className=" heading heading--4 sub-title">Values</h3>
							<p className=" text-2 text--normal description">
								Graduate, Postgraduate and Doctoral Students known for their
								hard work, competence, disciplined life, socially responsible,
								professional conduct &amp; intellectual and moral integrity.
							</p>
						</div>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Recognition</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">
								University of Engineering &amp; Management (UEM) is a fully
								government approved and UGC recognized University with the right
								to confer degrees as per the sections 22 of the UGC Act and as
								per UGC nomenclature of the degrees.
							</li>
							<li className="list-item">
								Engineering &amp; Management courses approved by AICTE.
							</li>
							<li className="list-item">
								University of Engineering &amp; Management (UEM) is a
								full-fledged university and not a deemed university.
							</li>
							<li className="list-item">
								University of Engineering &amp; Management (UEM) is recognized
								by Ministry of HRD, Government of India.
							</li>
							<li className="list-item">
								University of Engineering &amp; Management (UEM) has been
								established by IEM Trust, Act no. XXV of 2014 has been notified
								by Government notification.
							</li>
							<li className="list-item">Approved by Bar Council of India</li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Courses</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">B.Tech</li>
							<ul className="sub-list">
								<li>
									Computer Science &amp; Engineering (CSE), CSIT, CST, CSE
									[Artificial Intelligence and Machine Learning], CSE [Internet
									of Things and Cyber Security including BlockChain Technology]
								</li>
								<li>Electronics &amp; Communication Engineering (ECE)</li>
								<li>Electrical Engineering (EE)</li>
								<li>Mechanical Engineering (ME)</li>
								<li>Biotechnology</li>
							</ul>
							<li className="list-item">
								BBA (Bachelor of Business Administration)
							</li>
							<ul className="sub-list">
								<li>Marketing</li>
								<li>Human Resource</li>
								<li>Finance</li>
							</ul>
							<li className="list-item">
								MBA (Master of Business Administration)
							</li>
							<ul className="sub-list">
								<li>Marketing</li>
								<li>Human Resources</li>
								<li>Finance</li>
								<li>Business Analytics</li>
							</ul>
							<li className="list-item">BCA, BHM, BBA-LLB, MCA </li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Placements</h2>
						<p className=" text-2 text--normal description">
							Highest salary offers at UEM Kolkata: Rs. 72 Lakhs per annum.
						</p>
						<p className=" text-2 text--normal description">
							All eligible students of all pass out batches of UEM Kolkata got 1
							to 2 job offers on average.
						</p>
						<p className=" text-2 text--normal description">
							Placement of UEM continues till the last student is offered a job.
						</p>
						<p className=" text-2 text--normal description">
							Numerous number of companies visited UEM Kolkata and did campus
							recruitment of the students.
						</p>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Internships</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">
								Few companies – NTPC Ltd., WBSETCL, N.F. Railway, Damodar Valley
								Corporation, Metal &amp; Steel Factory Ishapore and so on.
							</li>
							<li className="list-item">
								Internship opportunities in all top reputed companies of the
								country
							</li>
						</ul>
					</div>
				</section>
				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Students’ projects</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">
								Manufacturing Tesla Coil for Wireless Power transmission.
							</li>
							<li className="list-item">
								Image Capturing and Maneuvering Drone.
							</li>
							<li className="list-item">
								Manufacturing Electric Bike, Formula 1 Car, Electric Go-Kart.
							</li>
							<li className="list-item">Development of Surveillance Drone.</li>
							<li className="list-item">
								IOT Based Solar Energy-Controlled Cooling System for Vehicles.
							</li>
							<li className="list-item">
								Design, Simulation and development of a gorlov turbine.
							</li>
							<li className="list-item">
								Three Dimensional wind, airspeed calculation, and prediction
								method for aerial drones using deep learning.
							</li>
							<li className="list-item">
								Localization method using integrated sensors in autonomous
								scrubbing robots for industrial cleaning.
							</li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Library</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">Open 24x7x365 hours</li>
							<li className="list-item">
								Online Public Access Catalog (OPAC) is available through which
								user search in library catalog to locate books.
							</li>
							<li className="list-item">
								Subscription to internationally renowned digital libraries like
								IEEE, DELNET, JGATE, EBSCO, Springer, Elsvier- Scopus, IEI, NDL
								(National Digital Library), India Business Insight (IBI),
								Magzter, SSC Online case finder.
							</li>
							<li className="list-item">
								Library operates through Koha ILM software.
							</li>
							<li className="list-item">
								Well-equipped Reading room for students & faculty members
								protected with CCTV security systems & high-speed internet
								facilities.
							</li>
							<li className="list-item">
								Availability of MOOCs like NPTEL, Swayam, ePG, Pathshala etc.
							</li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Student Chapters</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">IEEE Antenna and Propagation</li>
							<li className="list-item">IEEE Communication</li>
							<li className="list-item">
								Association for Computing Machinery (ACM)
							</li>
							<li className="list-item">Computer Society Of India (CSI)</li>
							<li className="list-item">Microbiologists Society</li>
							<li className="list-item">ISHRAE (Mechanical+EE)</li>
							<li className="list-item">Indian Plumbing Association</li>
							<li className="list-item">
								Institution of Electronics and Telecommunication Engineers
							</li>
							<li className="list-item">UEM Toastmasters International club</li>
							<li className="list-item">UEM Model United Nations</li>
							<li className="list-item">OPTICA Student Chapter</li>
							<li className="list-item">SPIE Chapter</li>
							<li className="list-item">CODECHEF Student Chapter</li>
							<li className="list-item">SPIE – OSA Students’ Chapter</li>
						</ul>
					</div>
				</section>

				<section className="about-uem">
					<div className="about-uem-content">
						<h2 className="heading heading--3 sub-title">Faculty</h2>
						<p className=" text-2 text--normal description">
							Our faculty consisting of professors from renowned institutes such
							as IIT Kharagpur and IIM Kolkata.
						</p>
						<p className=" text-2 text--normal description">
							The educational group is a true realm of the finest faculty
							members who have the spirit and standards to bring the best out of
							their students.
						</p>

						<h2 className="heading heading--3 sub-title">Startups</h2>
						<p className=" text-2 text--normal description">
							University has got an existing very prominent incubation center
							from where students are supported to start-up with their own
							industry.
						</p>
						<p className=" text-2 text--normal description">
							Notable start-ups from UEM Kolkata are RMB Technologies,
							Robostalkers Automation and Tech. Solutions, Midnight Reapers,
							Thunder Hound, Flappify, Better India, Illicium motors Pvt. Ltd.
						</p>

						<h2 className="heading heading--3 sub-title">
							Online Study Materials
						</h2>
						<ul className=" text-2 text--normal list">
							<li className="list-item">
								Adopted to the most modern way of international teaching namely
								flip classes.
							</li>
							<li className="list-item">
								All lecture videos are available in the University’s media
								channel Gymkhana TV.
							</li>
							<li className="list-item">
								All lecture notes are available online. Students come prepared
								to classes from lecture notes and videos as stated above and
								they discuss application-oriented studies in class hours, which
								leads to better industry acceptable engineers/managers.
							</li>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
}

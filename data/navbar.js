const url = "https://adcomsys.uem.edu.in"
export const navMenuItems = [
	{
		text: "Home",
		path: `${url}/`,
		endpoint: "/",
	},
	{
		text: "About UEM",
		path: `${url}/about-uem`,
		endpoint: "/about-uem",
		heading: "Welcome To UEM Kolkata",
	},
	{
		text: "Committees",
		sub: [
			{
				text: "Organizing Committee",
				path: `${url}/organizing-committee`,
				endpoint: "/committees/organizing",
				heading: "Conference Details",
			},
			{
				text: "Technical Program Committee",
				path: `${url}/technical-program-committee`,
				endpoint: "/committees/technical-program",
				heading: "Technical Program Committee",
			},
			{
				text: "international advisory Committee",
				path: `${url}/international-advisory-committee`,
				endpoint: "/committees/international-advisory",
				heading: "International Advisory Committee",
			},
		],
	},
	{
		text: "Authors",
		
		sub: [
			{
				text: "Submissions",
				path: `${url}/submissions`,
				endpoint: "/authors/submissions",
				heading: "INFORMATION FOR AUTHORS OF SPRINGER CONFERENCE PROCEEDINGS",
			},
			{
				text: "Call For Papers",
				heading: "Call For Papers",
				path: `${url}/call-for-papers`,
				endpoint: "/authors/call-for-papers",
			},
			{
				// text: "Important ",
				text: "Important Dates",
				endpoint: "/authors/important-dates",
				path: `${url}/important-dates`,
				heading: "importatnt dates",
			},
		],
	},
	{
		text: "Keynote Speakers",
		heading: "Keynote Speakers",
		path: `${url}/keynote-speakers`,
		endpoint: "/keynote-speakers",
	},
	
	{
		text: "Technical Programs",
		sub: [
			{
				text: "Technical Programs Schecdule",
				heading: "Technical Programs Schecdule",
				path: `${url}/technical-programs-schedule`,
				endpoint: "/technical-programs/schedule",
			},
			{
				text: "Accepted and Registered Papers",
				heading: "Accepted and Registered Papers",
				path: `${url}/accepted-and-registered-papers`,
				endpoint: "/technical-programs/accepted-registered-papers",
			},
			{
				text: "Best Paper",
				heading: "Best Paper",
				path: `${url}/best-papers`,
				endpoint: "/technical-programs/best-paper",
			},
		],
	},
	{
		text: "Registration",
		heading: "Registration policy",
		path: `${url}/registration`,
		endpoint: "/registration",
	},
	{
		text: "Contact",
		heading: "Contact",
		path: `${url}/contact`,
		endpoint: "/contact",
	},
];

import React from "react";



function work_2() {
	return {
		date: "July 2023 - June 2023",
		title: "LinkedIn",
        position: "Site Reliability Engineer",
        logo: "linkedin.png",
		description:
		"Led critical migrations at LinkedIn, saving $196,000 in hardware costs. Developed a new Content Abuse service, significantly improving user experience. Mentored an intern on a high-impact project. Streamlined secret management, reducing deployment time by 86%. Designed a user-friendly UI for an alert auditing tool to enhance operational efficiency.",
        internship_date: "1 May 2020 - 15 July 2020",
        internship_description:
		"Kickstarted the Trust Availability Project by calculating and onboarding Service Availability metrics for 6 critical backend microservices on LinkedIn’s availability dashboard, improving service health monitoring.",
		keywords: [
			"LinkedIn",
			"Garima",
			"Garima Luthra",
		]
	};
}

function work_3() {
	return {
		date: "Jan 2021 – June 2021",
		title: "American Express",
        logo: "american-express.svg",
        position: "Analyst Intern",
		description:
		"Validated key machine learning models using Hive, ensuring model reliability and contributing to improved risk management. Developed Python automation for model tracking, significantly reducing manual effort and improving accuracy.",
        internship_date: "",
        internship_description: "",
		keywords: [
			"American Express",
			"Garima",
			"Garima Luthra",
		]
	};
}

const myWork = [work_2, work_3];

export default myWork;

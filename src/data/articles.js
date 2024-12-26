import React from "react";
import { ACHIEVEMENT_TYPES } from '../components/articles/article';


function achievement_hackathon_1() {
	return {
	  date: "2021",
	  title: "LinkedIn Global Hack Day",  // No need to include "Hackathon |" as the component will handle it
	  type: ACHIEVEMENT_TYPES.HACKATHON,
	  link: "",
	  guide: "",
	  institute: "LinkedIn",
	  codelink: "",
	  description: "Awarded as the Winner of Global Hack Day Hackathon organized by WIT LinkedIn for presenting an idea empowering women entrepreneurs to grow their businesses through the LinkedIn platform",
	  keywords: [
		"Canvas",
		"Figma",
		"Leadership",
		"Garima",
		"Garima Luthra"
	  ]
	};
  }
function leadership_0() {
	return {
		date: "2020",
		title: "Team Lead, Instinct IGDTUW ",
		link: "",
		guide: "",
		type: ACHIEVEMENT_TYPES.CREATIVE,
		institute: "IGDTUW",
		codelink: "",
		isPublished: false,
		description:
			"Team Lead, Instinct IGDTUW (2017 – 2019): Spearheaded 20+ confidence-building, public speaking, and interview preparation workshops. Drove social campaigns like Anti-Body Shaming and Mental Health.",
		keywords: [
			"Garima",
			"Garima Luthra",
		]
	};
}

function article_mentorship_0() {
	return {
		date: "2020",
		title: "CoachIn Program Mentor",
		link: "",
		guide: "",
		type: ACHIEVEMENT_TYPES.MENTORSHIP,
		institute: "LinkedIn",
		codelink: "",
		isPublished: false,
		description:
		"Mentor, LinkedIn CoachIn Program (2024): Guided undergraduate women students in securing software engineering placements by conducting mock interviews and helping them enhance their coding skills.",
		keywords: [
			"Mentionship",
			"LinkedIn",
			"Garima",
			"Garima Luthra"
		]
	};
}

function article_mentorship_1() {
	return {
		date: "2020",
		title: "Best DSA Mentor ",
		link: "",
		guide: "",
		type: ACHIEVEMENT_TYPES.MENTORSHIP,
		institute: "SkillShip Foundation",
		codelink: "",
		isPublished: false,
		description:
		"Recognized as the Best DSA Mentor in Codonfest Mentorship Program organized by SkillShip Foundation",
		keywords: [
			"Mentionship",
			"LinkedIn",
			"Garima",
			"Garima Luthra"
		]
	};
}

function article_academic_1() {
	return {
		date: "2015",
		title: "Academic Excellence",
		link: "",
		guide: "",
		type: ACHIEVEMENT_TYPES.ACADEMIC,
		institute: "Ryan International School",
		codelink: "",
		isPublished: false,
		description:
		"Received the Academic Excellence Award for being an academic scholar for 5 consecutive years at school",
		keywords: [
			"Academic",
			"LinkedIn",
			"Garima",
			"Garima Luthra"
		]
	};
}

function painting_1() {
	return {
		date: "2015",
		title: "Winner of Space Settlement Design Contest",
		link: "",
		guide: "",
		type: ACHIEVEMENT_TYPES.CREATIVE,
		institute: "NASA Ames Research Center",
		codelink: "",
		isPublished: false,
		description:
		"Awarded as the Winner of Space Settlement Design Contest organized by NASA Ames Research Center.",
		keywords: [
			"Mentionship",
			"LinkedIn",
			"Garima",
			"Garima Luthra"
		]
	};
}

// function article_1() {
// 	return {
// 		date: "Jan 2020 – July 2020",
// 		title: "SLAM and Map Learning using Hybrid Semantic Graph Optimization",
// 		link: "https://ieeexplore.ieee.org/abstract/document/9837164",
// 		guide: "Asst. Prof. Rahul Kala, Department of Information Technology",
// 		institute: "Indian Institute of Information Technology, Allahabad",
// 		codelink: "https://github.com/drv-agwl/Hybrid-SPTAM",
// 		isPublished: true,
// 		description:
// 			"Improved localization accuracy of V-SLAM by injecting semantic information of detected corner points (using L-CNN). Detected object in a scene were used for place recognition and correspondence matching which further enhanced the semantic information provided to V-SLAM module.",
// 		keywords: [
// 			"Mentionship",
// 			"LinkedIn",
// 			"Garima",
// 			"Garima Luthra"
// 		]
// 	};
// }

const myArticles = [leadership_0, painting_1, article_mentorship_0, article_mentorship_1, article_academic_1, achievement_hackathon_1];

export default myArticles;


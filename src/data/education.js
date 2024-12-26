import React from "react";

function education_3() {
	return {
		date: "",
		title: "Additional Courses",
		description:"",
        gpa: "",
        institute: "",
        courses: [],
        onlineCoursesList: [
            {
                "name": "Machine Learning",
                "institute": "Stanford",
                "date": "14 Jan. 2019",
                "certificate": "https://www.coursera.org/account/accomplishments/verify/2PPS4UYUN6H7",
            },
        ],
		keywords: [
			"Coursera",
			"Garima Luthra",
			"Garima",
		]
	};
}

function education_1() {
	return {
		date: "July 2017 - June 2021",
		title: "Undergrad",
		description:
			"Bachelor of Technology in Computer Science; <b>1st</b> division with  <b>distinction</b> ",
        gpa: "86.19%",
        institute: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
        courses: [
            "Artificial Intelligence",
            "Machine Learning",
            "Image Processing",
            "Data Structures",
            "Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Software Engineering",
            "Database Management Systems",
        ],
        onlineCoursesList: [],
		keywords: [
			"Indira Gandhi Delhi Technical University for Women",
            "igdtuw",
			"Garima Luthra",
			"Garima",
		]
	};
}

const myEducation = [education_1, education_3];

export default myEducation;

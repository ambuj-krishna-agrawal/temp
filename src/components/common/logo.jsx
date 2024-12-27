import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}
	let full_path = process.env.PUBLIC_URL + "/" + INFO.main.logo
	console.log("path", full_path)
	const imageElement = (
		<img src={full_path} alt="logo" className="logo" width={width} /> 
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;


  // components/achievements/Achievement.jsx
  import React from "react";
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { 
	faLink, 
	faUsers, // leadership
	faPaintBrush, // creative
	faTrophy, // competition
	faLightbulb, // hackathon
	faGraduationCap, // academic
	faHandsHelping, // mentorship
	faHeart // volunteer
  } from "@fortawesome/free-solid-svg-icons";
//   import { ACHIEVEMENT_TYPES } from '../../types/achievements';
  import "./style/achievement.css";
  
  const getIconForType = (type) => {
	const iconMap = {
	  [ACHIEVEMENT_TYPES.LEADERSHIP]: faUsers,
	  [ACHIEVEMENT_TYPES.MENTORSHIP]: faHandsHelping,
	  [ACHIEVEMENT_TYPES.ACADEMIC]: faGraduationCap,
	  [ACHIEVEMENT_TYPES.HACKATHON]: faLightbulb,
	  [ACHIEVEMENT_TYPES.CREATIVE]: faPaintBrush,
	  [ACHIEVEMENT_TYPES.COMPETITION]: faTrophy,
	  [ACHIEVEMENT_TYPES.VOLUNTEER]: faHeart
	};
	return iconMap[type] || faTrophy;
  };

	// types/achievements.js
	export const ACHIEVEMENT_TYPES = {
		LEADERSHIP: 'leadership',
		MENTORSHIP: 'mentorship',
		ACADEMIC: 'academic',
		HACKATHON: 'hackathon',
		CREATIVE: 'creative',  // for paintings, designs, etc.
		COMPETITION: 'competition',
		VOLUNTEER: 'volunteer'
	};
  
  const getColorForType = (type) => {
	const colorMap = {
	  [ACHIEVEMENT_TYPES.LEADERSHIP]: 'linear-gradient(135deg, #FF6B6B, #EE5253)',
	  [ACHIEVEMENT_TYPES.MENTORSHIP]: 'linear-gradient(135deg, #4834D4, #686DE0)',
	  [ACHIEVEMENT_TYPES.ACADEMIC]: 'linear-gradient(135deg, #6C5CE7, #a55eea)',
	  [ACHIEVEMENT_TYPES.HACKATHON]: 'linear-gradient(135deg, #00B894, #00CEC9)',
	  [ACHIEVEMENT_TYPES.CREATIVE]: 'linear-gradient(135deg, #FF9F43, #FFA502)',
	  [ACHIEVEMENT_TYPES.COMPETITION]: 'linear-gradient(135deg, #6b8afd, #4466e9)',
	  [ACHIEVEMENT_TYPES.VOLUNTEER]: 'linear-gradient(135deg, #FC427B, #FF5E57)'
	};
	return colorMap[type] || colorMap[ACHIEVEMENT_TYPES.COMPETITION];
  };
  
  const Article = (props) => {
	const { 
	  date, 
	  title, 
	  description, 
	  link, 
	  codelink, 
	  institute, 
	  guide,
	  type 
	} = props;
  
	// Format title to show category
	console.log("type:", type)
	const formattedTitle = title.includes('|') ? title : `${type.charAt(0).toUpperCase() + type.slice(1)} | ${title}`;
  
	return (
	  <div className="achievement-card">
		<div className="achievement-header">
		  <div 
			className="achievement-icon"
			style={{ background: getColorForType(type) }}
		  >
			<FontAwesomeIcon icon={getIconForType(type)} className="achievement-icon-symbol" />
		  </div>
		  <div className="achievement-title-section">
			<h3 className="achievement-title">{formattedTitle}</h3>
			<div className="achievement-metadata">
			  <span className="achievement-date">{date}</span>
			  {institute && (
				<>
				  <span className="metadata-separator">•</span>
				  <span className="achievement-institute">{institute}</span>
				</>
			  )}
			</div>
		  </div>
		</div>
  
		<div className="achievement-content">
		  <p className="achievement-description">{description}</p>
		  {guide && (
			<div className="achievement-guide">
			  <FontAwesomeIcon icon={faUsers} className="guide-icon" />
			  <span>Guided by: {guide}</span>
			</div>
		  )}
		</div>
  
		{(link || codelink) && (
		  <div className="achievement-links">
			{codelink && (
			  <Link to={codelink} className="achievement-link" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLink} />
				<span>View Code</span>
			  </Link>
			)}
			{link && (
			  <Link to={link} className="achievement-link" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLink} />
				<span>View Details</span>
			  </Link>
			)}
		  </div>
		)}
	  </div>
	);
  };
  
  export default Article;
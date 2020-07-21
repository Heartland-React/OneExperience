import React from "react";
import "heartland-react/src/card.css";

const Card = (props) => {
	return <div className='card'>{props.children}</div>;
};

export default Card;

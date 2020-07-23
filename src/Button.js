import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";

import "heartland-react/src/button.css";

const createSelector = (name) => {
	return name
		.replace(/[^a-zA-Z0-9\s]+/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.toLowerCase();
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	selector: PropTypes.string,
	style: PropTypes.object,
};

function Button(props) {
	let style = "btn ";

	if (!props.text) {
		style = "btnIconOnly ";
	}

	switch (props.type) {
		case "cancel":
			style += "cancelBtn";
			break;
		case "primary":
			style += "primaryBtn";
			break;
		case "secondary":
			style += "secondaryBtn";
			break;
		case "dashed":
			style += "dashedBtn";
			break;
		case "warning":
			style += "warningBtn";
			break;
		default:
			style += "primaryBtn";
	}

	return (
		<button
			className={style}
			style={props.style}
			disabled={props.disabled}
			data-test={`button ${createSelector(
				props.selector ? props.selector : props.text
			)}`}
			onClick={() => {
				if (!props.loading) props.onClick();
			}}
		>
			{props.loading && (
				<Loader
					type='Oval'
					height={20}
					width={20}
					radius={16}
					color='#fff'
					className='iconLoading'
				/>
			)}
			{!props.loading && <span>{props.text}</span>}
		</button>
	);
}

export default Button;

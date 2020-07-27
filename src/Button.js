import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "heartland-react/src/button.css";

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	iconLeft: PropTypes.object,
	iconRight: PropTypes.object,
	loading: PropTypes.bool,
	selector: PropTypes.string,
	style: PropTypes.object,
};

export function Button({
	onClick,
	text,
	type,
	disabled,
	iconLeft,
	iconRight,
	loading,
	selector,
	style,
}) {
	const createSelector = (name) => {
		return name
			.replace(/[^a-zA-Z0-9\s]+/g, "")
			.trim()
			.replace(/\s+/g, "-")
			.toLowerCase();
	};

	let cName = "h-btn ";

	if (!text) {
		cName = "h-btnIconOnly ";
	}

	switch (type) {
		case "cancel":
			cName += "h-cancelBtn";
			break;
		case "primary":
			cName += "h-primaryBtn";
			break;
		case "secondary":
			cName += "h-secondaryBtn";
			break;
		case "dashed":
			cName += "h-dashedBtn";
			break;
		case "warning":
			cName += "h-warningBtn";
			break;
		default:
			cName += "h-primaryBtn";
	}

	return (
		<button
			className={cName}
			style={style}
			disabled={disabled}
			data-test={`button ${createSelector(selector ? selector : text)}`}
			onClick={() => {
				if (!loading) onClick();
			}}
		>
			{loading && (
				<Loader
					type='Oval'
					height={20}
					width={20}
					radius={16}
					color='#fff'
					className='h-iconLoading'
				/>
			)}
			{iconLeft && !loading && (
				<FontAwesomeIcon
					className='h-icon h-iconLeft'
					size='lg'
					icon={iconLeft}
				/>
			)}
			{!loading && <span>{text}</span>}
			{iconRight && !loading && (
				<FontAwesomeIcon
					className='h-icon h-iconRight'
					size='lg'
					icon={iconRight}
				/>
			)}
		</button>
	);
}

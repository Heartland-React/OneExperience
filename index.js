import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "heartland-react/src/button.css";
import "heartland-react/src/input.css";

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

	return /*#__PURE__*/ React.createElement(
		"button",
		{
			className: cName,
			style: style,
			disabled: disabled,
			"data-test": `button ${createSelector(selector ? selector : text)}`,
			onClick: () => {
				if (!loading) onClick();
			},
		},
		loading &&
			/*#__PURE__*/ React.createElement(Loader, {
				type: "Oval",
				height: 20,
				width: 20,
				radius: 16,
				color: "#fff",
				className: "h-iconLoading",
			}),
		iconLeft &&
			!loading &&
			/*#__PURE__*/ React.createElement(FontAwesomeIcon, {
				className: "h-icon h-iconLeft",
				size: "lg",
				icon: iconLeft,
			}),
		!loading && /*#__PURE__*/ React.createElement("span", null, text),
		iconRight &&
			!loading &&
			/*#__PURE__*/ React.createElement(FontAwesomeIcon, {
				className: "h-icon h-iconRight",
				size: "lg",
				icon: iconRight,
			})
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	size: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	alwaysShowMask: PropTypes.bool,
	disabled: PropTypes.bool,
	iconRight: PropTypes.object,
	maskChar: PropTypes.string,
	maskType: PropTypes.string,
	placeholder: PropTypes.string,
	selector: PropTypes.string,
	valid: PropTypes.bool,
	style: PropTypes.object,
};
Input.defaultProps = {
	mask: "",
	maskChar: " ",
	alwaysShowMask: true,
	valid: true,
};
export function Input({
	label,
	onChange,
	size,
	value,
	alwaysShowMask,
	disabled,
	iconRight,
	maskChar,
	maskType,
	placeholder,
	selector,
	valid,
	style,
}) {
	const createMask = (maskType) => {
		let mask = "";

		switch (maskType) {
			case "phone":
				mask = "(999) 999-9999";
				break;

			case "ssn":
				mask = "999-99-9999";
				break;

			case "zip":
				mask = "99999";
				break;

			default:
				break;
		}

		return mask;
	};

	const creatTextBoxClass = (valid) => {
		let className = "h-textBox";
		className += valid ? "" : " h-invalid";
		return className;
	};

	const createSelector = (name) => {
		return name
			.replace(/[^a-zA-Z0-9\s]+/g, "")
			.trim()
			.replace(/\s+/g, "-")
			.toLowerCase();
	};

	const createContainerClass = (size) => {
		let sizeClass = "";

		switch (size) {
			case "max":
				sizeClass += "h-maxInput";
				break;

			case "medium":
				sizeClass += "h-mediumInput";
				break;

			default:
				break;
		}

		return sizeClass;
	};

	const inputContainerStyle = createContainerClass(size);
	const mask = createMask(maskType);
	const textBoxClass = creatTextBoxClass(valid);
	const selectorData = `input ${createSelector(selector ? selector : label)}`;
	return /*#__PURE__*/ React.createElement(
		"div",
		{
			className: inputContainerStyle,
		},
		/*#__PURE__*/ React.createElement(
			"label",
			{
				className: "h-inputLabel",
				htmlFor: label,
			},
			label
		),
		/*#__PURE__*/ React.createElement(
			"div",
			{
				className: textBoxClass,
				style: style,
			},
			/*#__PURE__*/ React.createElement(InputMask, {
				id: label,
				name: id,
				disabled: disabled,
				mask: mask,
				maskChar: maskChar,
				alwaysShowMask: alwaysShowMask,
				className: "h-textInput",
				type: "text",
				value: value,
				onChange: onChange,
				placeholder: placeholder,
				"data-test": selectorData,
			}),
			iconRight &&
				/*#__PURE__*/ React.createElement(FontAwesomeIcon, {
					size: "lg",
					icon: iconRight,
					className: "h-textIconRight",
				})
		)
	);
}

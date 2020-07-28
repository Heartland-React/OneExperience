import React from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StyledButton = styled.button`
	min-width: 124px;
	min-height: 39px;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 29px;
	align-items: center;
	text-align: center;
	box-sizing: border-box;
	cursor: pointer;
	margin: 2px;
	border: 2px solid var(--Hgray8);
	outline: none;
	padding-left: ${props => props.iconRight ? "15px" : "0px"};
	padding-right: ${props => props.iconLeft ? "15px" : "0px"};
	${props => props.type}
`;
const StyledLoader = styled(Loader)`
	position: relative;
	top: 4px;
`;
const Label = styled.label`
	display: block;
	font-size: 12px;
	text-align: left;
	font-weight: bold;
	margin-bottom: 2px;
	color: var(--Hgray1);
	text-transform: uppercase;
`;
const Container = styled.div`
	width: ${props => props.size === "medium" ? "48%" : "100%"};

	@media screen and (max-width: 992px) {
		width: 100%;
	}
`;
const StyledInputMask = styled(InputMask)`
	padding-left: 20px;
	box-sizing: border-box;
	display: block;
	border: none;
	width: 100%;
	font-size: 14px;
	color: var(--Hgray2);
	background-color: var(--Hwhite1);
	padding-top: 0px;
	padding-bottom: 0px;

	&:placeholder {
		color: var(--Hgray5);
	}

	&:focus {
		outline-width: 0;
	}

	&:focus::placeholder {
		color: transparent;
	}
`;
const TextBox = styled.div`
	background-color: var(--Hwhite1);
	width: 100%;
	height: 43px;
	outline: 0px;
	box-sizing: border-box;
	font-size: 14px;
	color: var(--Hgray2);
	border: 1px solid
		${props => props.valid ? "var(--Hgray4)" : "var(--Hred1)"};
	box-shadow: 1px 2px 3px var(--Hgray3);
	display: flex;

	&:hover {
		border: 1px solid var(--inputHover);
	}

	&:focus-within {
		outline: 1px solid var(--Hgray7);
	}
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	align-self: center;
	color: var(--Hgray10);
	background-color: transparent;
	padding-right: 19px;
`;

const createSelector = name => {
  return name.replace(/[^a-zA-Z0-9\s]+/g, "").trim().replace(/\s+/g, "-").toLowerCase();
};

export const Heartland = {
  Button: function Button({
    onClick,
    text,
    type,
    disabled,
    iconLeft,
    iconRight,
    loading,
    selector,
    style
  }) {
    let typeStyle = "";

    switch (type) {
      case "cancel":
        typeStyle = `
				color: var(--Hgray9);
				border: none;
				background-color: transparent;
				border-color: transparent;`;
        break;

      case "secondary":
        typeStyle = `
				color: var(--Hblue1);
				background-color: var(--Hwhite1);
				&:hover {
				color: var(--Hblue1);
				background-color: var(--Hwhite1);
				border-color: var(--Hblue1);	
				}`;
        break;

      case "dashed":
        typeStyle = `
				color: var(--Hblue1);
				background-color: var(--Hwhite1);
				border-style: dashed;
				border-color: var(--Hgray9);
				&:hover {
				color: var(--Hblue1);
				background-color: var(--Hwhite1);
				border-style: dashed;
				border-color: var(--Hblue1);	
				}`;
        break;

      case "warning":
        typeStyle = `
				color: var(--Hwhite1);
				border: none;
				background-color: var(--Hred1);
				border: 2px solid var(--Hred1);
				&:hover {
				color: var(--Hwhite1);
				border: none;
				background-color: var(--Hred2);
				border: 2px solid var(--Hred2);
				}`;
        break;

      case "primary":
      default:
        typeStyle = `
				color: var(--Hwhite1);
				background-color: var(--Hblue1);
				border-color: var(--Hblue1);
				&:hover {
				color: var(--Hwhite1);
				background-color: var(--Hnavy1);
				border-color: var(--Hnavy1);
				}`;
        break;
    }

    return /*#__PURE__*/React.createElement(StyledButton, {
      type: typeStyle,
      text: text,
      iconRight: iconRight,
      iconLeft: iconLeft,
      style: style,
      disabled: disabled,
      "data-test": `button ${createSelector(selector ? selector : text)}`,
      onClick: () => {
        if (!loading) onClick();
      }
    }, loading && /*#__PURE__*/React.createElement(StyledLoader, {
      type: "Oval",
      height: 20,
      width: 20,
      radius: 16,
      color: "#fff"
    }), iconLeft && !loading && /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      size: "lg",
      icon: iconLeft
    }), !loading && /*#__PURE__*/React.createElement("span", null, text), iconRight && !loading && /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      size: "lg",
      icon: iconRight
    }));
  },
  Input: function Input({
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
    style
  }) {
    const createMask = maskType => {
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

    const mask = createMask(maskType);
    const selectorData = `input ${createSelector(selector ? selector : label)}`;
    return /*#__PURE__*/React.createElement(Container, {
      size: size
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: label
    }, label), /*#__PURE__*/React.createElement(TextBox, {
      style: style,
      valid: valid
    }, /*#__PURE__*/React.createElement(StyledInputMask, {
      id: label,
      name: "h-" + label,
      disabled: disabled,
      mask: mask,
      maskChar: maskChar,
      alwaysShowMask: alwaysShowMask,
      type: "text",
      value: value,
      onChange: onChange,
      placeholder: placeholder,
      "data-test": selectorData
    }), iconRight && /*#__PURE__*/React.createElement(StyledFontAwesomeIcon, {
      size: "lg",
      icon: iconRight
    })));
  }
};
Heartland.Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  loading: PropTypes.bool,
  selector: PropTypes.string,
  style: PropTypes.object
};
Heartland.Input.propTypes = {
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
  style: PropTypes.object
};
Heartland.Input.defaultProps = {
  mask: "",
  maskChar: " ",
  alwaysShowMask: true,
  valid: true
};

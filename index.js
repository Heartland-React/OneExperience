import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "heartland-react/src/heartlandButton.css";
HeartlandButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  selector: PropTypes.string,
  style: PropTypes.object
};

function HeartlandButton(props) {
  const createSelector = name => {
    return name.replace(/[^a-zA-Z0-9\s]+/g, "").trim().replace(/\s+/g, "-").toLowerCase();
  };

  let style = "h-btn ";

  if (!props.text) {
    style = "h-btnIconOnly ";
  }

  switch (props.type) {
    case "cancel":
      style += "h-cancelBtn";
      break;

    case "primary":
      style += "h-primaryBtn";
      break;

    case "secondary":
      style += "h-secondaryBtn";
      break;

    case "dashed":
      style += "h-dashedBtn";
      break;

    case "warning":
      style += "h-warningBtn";
      break;

    default:
      style += "h-primaryBtn";
  }

  return /*#__PURE__*/React.createElement("button", {
    className: style,
    style: props.style,
    disabled: props.disabled,
    "data-test": `button ${createSelector(props.selector ? props.selector : props.text)}`,
    onClick: () => {
      if (!props.loading) props.onClick();
    }
  }, props.loading && /*#__PURE__*/React.createElement(Loader, {
    type: "Oval",
    height: 20,
    width: 20,
    radius: 16,
    color: "#fff",
    className: "h-iconLoading"
  }), !props.loading && /*#__PURE__*/React.createElement("span", null, props.text));
}

export default HeartlandButton;

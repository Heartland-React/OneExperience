"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heartland = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLoaderSpinner = _interopRequireDefault(require("react-loader-spinner"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\talign-self: center;\n\tcolor: var(--Hgray10);\n\tbackground-color: transparent;\n\tpadding-right: 19px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: var(--Hwhite1);\n\twidth: 100%;\n\theight: 43px;\n\toutline: 0px;\n\tbox-sizing: border-box;\n\tfont-size: 14px;\n\tcolor: var(--Hgray2);\n\tborder: 1px solid\n\t\t", ";\n\tbox-shadow: 1px 2px 3px var(--Hgray3);\n\tdisplay: flex;\n\n\t&:hover {\n\t\tborder: 1px solid var(--inputHover);\n\t}\n\n\t&:focus-within {\n\t\toutline: 1px solid var(--Hgray7);\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tpadding-left: 20px;\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tborder: none;\n\twidth: 100%;\n\tfont-size: 14px;\n\tcolor: var(--Hgray2);\n\tbackground-color: var(--Hwhite1);\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n\n\t&:placeholder {\n\t\tcolor: var(--Hgray5);\n\t}\n\n\t&:focus {\n\t\toutline-width: 0;\n\t}\n\n\t&:focus::placeholder {\n\t\tcolor: transparent;\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tmargin-top: 18px;\n\twidth: ", ";\n\n\t@media screen and (max-width: 992px) {\n\t\twidth: 100%;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tfont-size: 12px;\n\ttext-align: left;\n\tfont-weight: bold;\n\tmargin-bottom: 2px;\n\tcolor: var(--Hgray1);\n\ttext-transform: uppercase;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\ttop: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tmin-width: 124px;\n\tmin-height: 39px;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 14px;\n\tline-height: 29px;\n\talign-items: center;\n\ttext-align: center;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n\tmargin: 2px;\n\tborder: 2px solid var(--Hgray8);\n\toutline: none;\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.type;
});

var StyledLoader = (0, _styledComponents.default)(_reactLoaderSpinner.default)(_templateObject2());

var Label = _styledComponents.default.label(_templateObject3());

var Container = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.size === "medium" ? "48%" : "100%";
});

var StyledInputMask = (0, _styledComponents.default)(_reactInputMask.default)(_templateObject5());

var TextBox = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.valid ? "var(--Hgray4)" : "var(--Hred1)";
});

var StyledFontAwesomeButtonIcon = (0, _styledComponents.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject7(), function (props) {
  return props.position === "right" ? "15px" : "0px";
}, function (props) {
  return props.position === "left" ? "15px" : "0px";
});
var StyledFontAwesomeIcon = (0, _styledComponents.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject8());

var createSelector = function createSelector(name) {
  return name.replace(/[^a-zA-Z0-9\s]+/g, "").trim().replace(/\s+/g, "-").toLowerCase();
};

var Heartland = {
  Button: function Button(_ref) {
    var _onClick = _ref.onClick,
        text = _ref.text,
        type = _ref.type,
        disabled = _ref.disabled,
        iconLeft = _ref.iconLeft,
        iconRight = _ref.iconRight,
        loading = _ref.loading,
        selector = _ref.selector,
        style = _ref.style;
    var typeStyle = "";

    switch (type) {
      case "cancel":
        typeStyle = "\n\t\t\t\tcolor: var(--Hgray9);\n\t\t\t\tborder: none;\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder-color: transparent;";
        break;

      case "secondary":
        typeStyle = "\n\t\t\t\tcolor: var(--Hblue1);\n\t\t\t\tbackground-color: var(--Hwhite2);\n\t\t\t\t&:hover {\n\t\t\t\tcolor: var(--Hblue1);\n\t\t\t\tbackground-color: var(--Hwhite2);\n\t\t\t\tborder-color: var(--Hblue1);\t\n\t\t\t\t}";
        break;

      case "dashed":
        typeStyle = "\n\t\t\t\tcolor: var(--Hblue1);\n\t\t\t\tbackground-color: var(--Hwhite2);\n\t\t\t\tborder-style: dashed;\n\t\t\t\tborder-color: var(--Hgray9);\n\t\t\t\t&:hover {\n\t\t\t\tcolor: var(--Hblue1);\n\t\t\t\tbackground-color: var(--Hwhite2);\n\t\t\t\tborder-style: dashed;\n\t\t\t\tborder-color: var(--Hblue1);\t\n\t\t\t\t}";
        break;

      case "warning":
        typeStyle = "\n\t\t\t\tcolor: var(--Hwhite2);\n\t\t\t\tborder: none;\n\t\t\t\tbackground-color: var(--Hred1);\n\t\t\t\tborder: 2px solid var(--Hred1);\n\t\t\t\t&:hover {\n\t\t\t\tcolor: var(--Hwhite2);\n\t\t\t\tborder: none;\n\t\t\t\tbackground-color: var(--Hred2);\n\t\t\t\tborder: 2px solid var(--Hred2);\n\t\t\t\t}";
        break;

      case "primary":
      default:
        typeStyle = "\n\t\t\t\tcolor: var(--Hwhite2);\n\t\t\t\tbackground-color: var(--Hblue1);\n\t\t\t\tborder-color: var(--Hblue1);\n\t\t\t\t&:hover {\n\t\t\t\tcolor: var(--Hwhite2);\n\t\t\t\tbackground-color: var(--Hnavy1);\n\t\t\t\tborder-color: var(--Hnavy1);\n\t\t\t\t}";
        break;
    }

    return /*#__PURE__*/_react.default.createElement(StyledButton, {
      type: typeStyle,
      text: text,
      iconRight: iconRight,
      iconLeft: iconLeft,
      style: style,
      disabled: disabled,
      "data-test": "button ".concat(createSelector(selector ? selector : text)),
      onClick: function onClick() {
        if (!loading) _onClick();
      }
    }, loading && /*#__PURE__*/_react.default.createElement(StyledLoader, {
      type: "Oval",
      height: 20,
      width: 20,
      radius: 16,
      color: "#fff"
    }), iconLeft && !loading && /*#__PURE__*/_react.default.createElement(StyledFontAwesomeButtonIcon, {
      size: "lg",
      position: "left",
      icon: iconLeft
    }), !loading && /*#__PURE__*/_react.default.createElement("span", null, text), iconRight && !loading && /*#__PURE__*/_react.default.createElement(StyledFontAwesomeButtonIcon, {
      size: "lg",
      position: "right",
      icon: iconRight
    }));
  },
  Input: function Input(_ref2) {
    var label = _ref2.label,
        onChange = _ref2.onChange,
        size = _ref2.size,
        value = _ref2.value,
        alwaysShowMask = _ref2.alwaysShowMask,
        disabled = _ref2.disabled,
        iconRight = _ref2.iconRight,
        maskChar = _ref2.maskChar,
        maskType = _ref2.maskType,
        placeholder = _ref2.placeholder,
        selector = _ref2.selector,
        valid = _ref2.valid,
        style = _ref2.style;

    var createMask = function createMask(maskType) {
      var mask = "";

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

    var mask = createMask(maskType);
    var selectorData = "input ".concat(createSelector(selector ? selector : label));
    return /*#__PURE__*/_react.default.createElement(Container, {
      size: size
    }, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: label
    }, label), /*#__PURE__*/_react.default.createElement(TextBox, {
      style: style,
      valid: valid
    }, /*#__PURE__*/_react.default.createElement(StyledInputMask, {
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
    }), iconRight && /*#__PURE__*/_react.default.createElement(StyledFontAwesomeIcon, {
      size: "lg",
      icon: iconRight
    })));
  }
};
exports.Heartland = Heartland;
Heartland.Button.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  text: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  iconLeft: _propTypes.default.object,
  iconRight: _propTypes.default.object,
  loading: _propTypes.default.bool,
  selector: _propTypes.default.string,
  style: _propTypes.default.object
};
Heartland.Input.propTypes = {
  label: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  size: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  alwaysShowMask: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  iconRight: _propTypes.default.object,
  maskChar: _propTypes.default.string,
  maskType: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  selector: _propTypes.default.string,
  valid: _propTypes.default.bool,
  style: _propTypes.default.object
};
Heartland.Input.defaultProps = {
  mask: "",
  maskChar: " ",
  alwaysShowMask: true,
  valid: true
};

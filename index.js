"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heartland = exports.getSelectItem = exports.createSelectOptions = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLoaderSpinner = _interopRequireDefault(require("react-loader-spinner"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var TextBoxDiv = _styledComponents.default.div(_templateObject6(), function (props) {
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

var createSelectOptions = function createSelectOptions(_ref) {
  var data = _ref.data,
      value = _ref.value,
      label = _ref.label,
      valueSort = _ref.valueSort,
      noSorting = _ref.noSorting;
  return data.sort(function (a, b) {
    if (noSorting) return 0;

    if (valueSort) {
      return a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0;
    } else {
      return a[label] > b[label] ? 1 : b[label] > a[label] ? -1 : 0;
    }
  }).map(function (x) {
    return {
      value: x[value],
      label: x[label]
    };
  });
};

exports.createSelectOptions = createSelectOptions;

var getSelectItem = function getSelectItem(_ref2) {
  var e = _ref2.e,
      multiple = _ref2.multiple,
      options = _ref2.options,
      valueField = _ref2.valueField;
  if (multiple && e != null) return e.map(function (e) {
    return options.find(function (x) {
      return x[valueField] === e.value;
    });
  });else if (!multiple) return options.find(function (x) {
    return x[valueField] === e.value;
  });
};

exports.getSelectItem = getSelectItem;
var Heartland = {
  Button: function Button(_ref3) {
    var _onClick = _ref3.onClick,
        text = _ref3.text,
        type = _ref3.type,
        disabled = _ref3.disabled,
        iconLeft = _ref3.iconLeft,
        iconRight = _ref3.iconRight,
        loading = _ref3.loading,
        selector = _ref3.selector,
        style = _ref3.style;
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
  TextBox: function TextBox(_ref4) {
    var label = _ref4.label,
        onChange = _ref4.onChange,
        size = _ref4.size,
        value = _ref4.value,
        alwaysShowMask = _ref4.alwaysShowMask,
        disabled = _ref4.disabled,
        iconRight = _ref4.iconRight,
        maskChar = _ref4.maskChar,
        maskType = _ref4.maskType,
        placeholder = _ref4.placeholder,
        selector = _ref4.selector,
        valid = _ref4.valid,
        style = _ref4.style;

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
    }, label), /*#__PURE__*/_react.default.createElement(TextBoxDiv, {
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
  },
  DropDown: function DropDown(props) {
    var customStyles = {
      option: function option(provided, state) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          color: "var(--Hgray2)",
          textAlign: "left",
          backgroundColor: state.isSelected ? "var(--Hgray11)" : "var(--Hwhite1)",
          "&:hover": {
            backgroundColor: !state.isSelected && "var(--Hgray12)"
          }
        });
      },
      menu: function menu(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          top: "36px",
          zIndex: "20",
          borderRadius: "0px",
          backgroundColor: "var(--Hwhite1)"
        });
      },
      container: function container(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          width: "100%"
        });
      },
      control: function control(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          height: "43px",
          boxShadow: "1px 2px 3px var(--Hgray3)",
          border: props.valid ? "1px solid var(--Hgray4)" : "1px solid var(--Hred1)",
          backgroundColor: "var(--Hwhite1)",
          fontSize: "14px",
          color: "var(--Hgray2)",
          borderRadius: "0px"
        });
      },
      singleValue: function singleValue(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          color: "var(--Hgray2)"
        });
      },
      placeholder: function placeholder(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          color: "var(--Hgray5)",
          fontSize: "14px",
          fontFamily: "Roboto"
        });
      },
      noOptionsMessage: function noOptionsMessage(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          backgroundColor: "var(--Hwhite2)",
          borderRadius: "0px",
          fontFamily: "Roboto"
        });
      },
      multiValueRemove: function multiValueRemove(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          color: "var(--Hgray13)"
        });
      }
    };
    return /*#__PURE__*/_react.default.createElement(Container, {
      size: props.size
    }, /*#__PURE__*/_react.default.createElement(Label, {
      htmlFor: props.label
    }, props.label), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      styles: customStyles,
      isSearchable: false,
      isLoading: props.loading,
      isDisabled: props.disabled,
      id: props.label,
      isMulti: props.multiple,
      placeholder: props.placeholder,
      theme: function theme(_theme) {
        return _objectSpread(_objectSpread({}, _theme), {}, {
          colors: _objectSpread(_objectSpread({}, _theme.colors), {}, {
            primary: "var(--Hgray4)",
            primary50: "var(--Hgray13)",
            dangerLight: "var(--Hblue1)",
            danger: "var(--Hnavy1)"
          })
        });
      },
      options: createSelectOptions({
        data: props.options,
        value: props.valueField,
        label: props.labelField,
        valueSort: props.orderByValue,
        noSorting: props.noOrder
      }),
      onChange: function onChange(e) {
        props.onChange(getSelectItem({
          e: e,
          multiple: props.multiple,
          options: props.options,
          valueField: props.valueField
        }));
      },
      value: props.value ? createSelectOptions({
        data: props.multiple ? props.value : [props.value],
        value: props.valueField,
        label: props.labelField
      }) : props.placeholder
    }));
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
Heartland.TextBox.propTypes = {
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
Heartland.TextBox.defaultProps = {
  mask: "",
  maskChar: " ",
  alwaysShowMask: true,
  valid: true
};
Heartland.DropDown.propTypes = {
  label: _propTypes.default.string.isRequired,
  labelField: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.array.isRequired,
  valueField: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  noOrder: _propTypes.default.bool,
  orderByValue: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  size: _propTypes.default.string,
  valid: _propTypes.default.bool,
  value: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array])
};
Heartland.DropDown.defaultProps = {
  valid: true,
  size: "medium"
};

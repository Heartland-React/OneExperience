"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeartlandLabel = exports.HeartlandInput = exports.HeartlandCheckbox = exports.HeartlandButton = exports.lightTheme = void 0;

var _styles = require("@material-ui/core/styles");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = {
  Purple: "#4646d3",
  Dark: "#777F84",
  Red: "#c8102e",
  White: "#ffffff",
  Black: "#3A3C47",
  Gray: "#3A3D46",
  LightGray: "#BCBFC8",
  LightBlue: "#9CDCDB"
};
var lightTheme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: colors.Purple,
      light: colors.White
    },
    secondary: {
      main: colors.LightBlue,
      contrastText: colors.White,
      light: colors.Gray
    },
    dark: {
      main: colors.Dark,
      light: colors.Gray,
      black: colors.Black,
      contrastText: colors.LightGray
    }
  },
  typography: {
    fontFamily: ["Poppins", '"Helvetica Neue"', "Arial"],
    button: {
      textTransform: "none",
      letterSpacing: ".04rem",
      fontWeight: "500",
      maxHeight: "3.4rem"
    }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiInput: {
      root: {
        "&::placeholder": {
          color: colors.Gray
        }
      }
    },
    MuiSkeleton: {
      root: {
        borderRadius: "14px"
      }
    },
    MuiPaper: {
      root: {
        borderRadius: "14px"
      },
      rounded: {
        borderRadius: "14px"
      }
    },
    MuiPopover: {
      root: {
        borderRadius: "14px"
      }
    },
    MuiList: {
      root: {
        borderRadius: "14px"
      }
    }
  }
});
exports.lightTheme = lightTheme;
var HeartlandButton = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      fontSize: "1rem",
      borderRadius: "100px",
      minWidth: "8rem",
      backfaceVisibility: "inherit",
      MozBackfaceVisibility: "inherit",
      WebkitBackfaceVisibility: "inherit",
      fontWeight: "500",
      letterSpacing: "0"
    },
    outlinedPrimary: {
      backgroundColor: "".concat(theme.palette.primary.light),
      "&:hover": {
        borderColor: "".concat(theme.palette.secondary.main),
        backgroundColor: "".concat(theme.palette.primary.light)
      },
      "&:selected": {
        backgroundColor: "".concat(theme.palette.secondary.main),
        color: "".concat(theme.palette.primary.light)
      },
      "&:focused": {
        backgroundColor: "".concat(theme.palette.secondary.main),
        color: "".concat(theme.palette.primary.light)
      }
    }
  };
})(_Button.default);
exports.HeartlandButton = HeartlandButton;
var HeartlandCheckbox = (0, _styles.withStyles)(function (theme) {
  return {
    checked: {
      color: "".concat(theme.palette.primary.main)
    }
  };
})(_Checkbox.default);
exports.HeartlandCheckbox = HeartlandCheckbox;
var HeartlandInput = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      "label + &": {
        marginTop: theme.spacing(7)
      },
      border: "1px solid ".concat(theme.palette.dark.contrastText),
      borderRadius: 12,
      maxHeight: "3.4rem"
    },
    input: {
      position: "relative",
      backgroundColor: "".concat(theme.palette.primary.light),
      color: theme.palette.dark.black,
      fontSize: ".9rem",
      borderRadius: 12,
      fontWeight: 500,
      height: "1.8rem",
      padding: "10px 12px",
      textIndent: "2rem",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: ["Poppins", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
      "&:focus": {
        boxShadow: "".concat((0, _styles.fade)(theme.palette.dark.main, 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.dark.main
      },
      "&::placeholder": {
        color: "".concat(theme.palette.dark.light),
        opacity: ".4",
        fontWeight: 400,
        fontSize: 14
      }
    },
    error: {
      border: "1px solid ".concat(theme.palette.secondary.main),
      borderRadius: 12
    }
  };
})(_InputBase.default);
exports.HeartlandInput = HeartlandInput;
var HeartlandLabel = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      color: "".concat(theme.palette.dark.black),
      fontSize: "1.2rem",
      fontWeight: "bold",
      textIndent: "1rem"
    },
    // focused: {
    //   color: `${theme.palette.primary.main} !important`,
    // },
    error: {
      color: "".concat(theme.palette.secondary.main)
    },
    asterisk: {
      color: "".concat(theme.palette.secondary.main)
    }
  };
})(_InputLabel.default);
exports.HeartlandLabel = HeartlandLabel;

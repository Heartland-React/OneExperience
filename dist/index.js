Object.defineProperty(exports, '__esModule', { value: true });

//import { withStyles, fade } from "@material-ui/core/styles";

// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import InputBase from "@material-ui/core/InputBase";
// import InputLabel from "@material-ui/core/InputLabel";

const colors = {
	Purple: "#4646d3",
	Dark: "#777F84",
	Red: "#c8102e",
	White: "#ffffff",
	Black: "#3A3C47",
	Gray: "#3A3D46",
	LightGray: "#BCBFC8",
	LightBlue: "#9CDCDB",
};

const lightTheme = () => {
	return {
		palette: {
			primary: {
				main: colors.Purple,
				light: colors.White,
				contrastText: colors.Red,
			},
			secondary: {
				main: colors.LightBlue,
				contrastText: colors.White,
				light: colors.Gray,
			},
			dark: {
				main: colors.Dark,
				light: colors.Gray,
				black: colors.Black,
				contrastText: colors.LightGray,
			},
		},
		typography: {
			fontFamily: ["Poppins", '"Helvetica Neue"', "Arial"],
			button: {
				textTransform: "none",
				letterSpacing: ".04rem",
				fontWeight: "500",
				maxHeight: "3.4rem",
			},
		},
		shape: {
			borderRadius: 2,
		},
		overrides: {
			MuiInput: {
				root: {
					"&::placeholder": {
						color: colors.Gray,
					},
				},
			},
			MuiSkeleton: {
				root: {
					borderRadius: "14px",
				},
			},
			MuiPaper: {
				root: {
					borderRadius: "14px",
				},
				rounded: {
					borderRadius: "14px",
				},
			},
			MuiPopover: {
				root: {
					borderRadius: "14px",
				},
			},
			MuiList: {
				root: {
					borderRadius: "14px",
				},
			},
		},
	};
};

const HeartlandButton = withStyles((theme) => ({
	root: {
		fontSize: "1rem",
		borderRadius: "100px",
		minWidth: "8rem",
		backfaceVisibility: "inherit",
		MozBackfaceVisibility: "inherit",
		WebkitBackfaceVisibility: "inherit",
		fontWeight: "500",
		letterSpacing: "0",
	},
	outlinedPrimary: {
		backgroundColor: `${theme.palette.primary.light}`,
		"&:hover": {
			borderColor: `${theme.palette.secondary.main}`,
			backgroundColor: `${theme.palette.primary.light}`,
		},
		"&:selected": {
			backgroundColor: `${theme.palette.secondary.main}`,
			color: `${theme.palette.primary.light}`,
		},
		"&:focused": {
			backgroundColor: `${theme.palette.secondary.main}`,
			color: `${theme.palette.primary.light}`,
		},
	},
}))(Button);

const HeartlandCheckbox = withStyles((theme) => ({
	checked: {
		color: `${theme.palette.primary.main}`,
	},
}))(Checkbox);

const HeartlandInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(7),
		},
		border: `1px solid ${theme.palette.dark.contrastText}`,
		borderRadius: 12,
		maxHeight: "3.4rem",
	},
	input: {
		position: "relative",
		backgroundColor: `${theme.palette.primary.light}`,
		color: theme.palette.dark.black,
		fontSize: ".9rem",
		borderRadius: 12,
		fontWeight: 500,
		height: "1.8rem",
		padding: "10px 12px",
		textIndent: "2rem",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
		fontFamily: [
			"Poppins",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			boxShadow: `${fade(theme.palette.dark.main, 0.25)} 0 0 0 0.2rem`,
			borderColor: theme.palette.dark.main,
		},
		"&::placeholder": {
			color: `${theme.palette.dark.light}`,
			opacity: ".4",
			fontWeight: 400,
			fontSize: 14,
		},
	},
	error: {
		border: `1px solid ${theme.palette.primary.contrastText}`,
		borderRadius: 12,
	},
}))(InputBase);

const HeartlandLabel = withStyles((theme) => ({
	root: {
		color: `${theme.palette.dark.black}`,
		fontSize: "1.2rem",
		fontWeight: "bold",
		textIndent: "1rem",
	},
	error: {
		color: `${theme.palette.primary.contrastText}`,
	},
	asterisk: {
		color: `${theme.palette.secondary.main}`,
	},
}))(InputLabel);

exports.HeartlandButton = HeartlandButton;
exports.HeartlandCheckbox = HeartlandCheckbox;
exports.HeartlandInput = HeartlandInput;
exports.HeartlandLabel = HeartlandLabel;
exports.lightTheme = lightTheme;

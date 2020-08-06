import React from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import Select from "react-select";
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
	${(props) => props.type}
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
	margin-bottom: 0.2em;
	color: var(--Hgray1);
	text-transform: uppercase;
`;

const Container = styled.div`
	margin-top: 1em;
	width: ${(props) => (props.size === "medium" ? "48%" : "100%")};

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

const TextBoxDiv = styled.div`
	background-color: var(--Hwhite1);
	width: 100%;
	height: 3em;
	outline: 0px;
	box-sizing: border-box;
	font-size: 14px;
	color: var(--Hgray2);
	border: 1px solid
		${(props) => (props.valid ? "var(--Hgray4)" : "var(--Hred1)")};
	box-shadow: 1px 2px 3px var(--Hgray3);
	display: flex;

	&:hover {
		border: 1px solid var(--inputHover);
	}

	&:focus-within {
		outline: 1px solid var(--Hgray7);
	}
`;

const StyledFontAwesomeButtonIcon = styled(FontAwesomeIcon)`
	padding-left: ${(props) => (props.position === "right" ? "15px" : "0px")};
	padding-right: ${(props) => (props.position === "left" ? "15px" : "0px")};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	align-self: center;
	color: var(--Hgray10);
	background-color: transparent;
	padding-right: 19px;
`;

const createSelector = (name) => {
	return name
		.replace(/[^a-zA-Z0-9\s]+/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.toLowerCase();
};

export const createSelectOptions = ({
	data,
	value,
	label,
	valueSort,
	noSorting,
}) => {
	return data
		.sort(function (a, b) {
			if (noSorting) return 0;
			if (valueSort) {
				return a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0;
			} else {
				return a[label] > b[label] ? 1 : b[label] > a[label] ? -1 : 0;
			}
		})
		.map((x) => {
			return { value: x[value], label: x[label] };
		});
};

export const getSelectItem = ({ e, multiple, options, valueField }) => {
	if (multiple && e != null)
		return e.map((e) => {
			return options.find((x) => x[valueField] === e.value);
		});
	else if (!multiple) return options.find((x) => x[valueField] === e.value);
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
		style,
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
				background-color: var(--Hwhite2);
				&:hover {
				color: var(--Hblue1);
				background-color: var(--Hwhite2);
				border-color: var(--Hblue1);	
				}`;
				break;
			case "dashed":
				typeStyle = `
				color: var(--Hblue1);
				background-color: var(--Hwhite2);
				border-style: dashed;
				border-color: var(--Hgray9);
				&:hover {
				color: var(--Hblue1);
				background-color: var(--Hwhite2);
				border-style: dashed;
				border-color: var(--Hblue1);	
				}`;
				break;
			case "warning":
				typeStyle = `
				color: var(--Hwhite2);
				border: none;
				background-color: var(--Hred1);
				border: 2px solid var(--Hred1);
				&:hover {
				color: var(--Hwhite2);
				border: none;
				background-color: var(--Hred2);
				border: 2px solid var(--Hred2);
				}`;
				break;
			case "primary":
			default:
				typeStyle = `
				color: var(--Hwhite2);
				background-color: var(--Hblue1);
				border-color: var(--Hblue1);
				&:hover {
				color: var(--Hwhite2);
				background-color: var(--Hnavy1);
				border-color: var(--Hnavy1);
				}`;
				break;
		}

		return (
			<StyledButton
				type={typeStyle}
				text={text}
				iconRight={iconRight}
				iconLeft={iconLeft}
				style={style}
				disabled={disabled}
				data-test={`button ${createSelector(selector ? selector : text)}`}
				onClick={() => {
					if (!loading) onClick();
				}}
			>
				{loading && (
					<StyledLoader
						type='Oval'
						height={20}
						width={20}
						radius={16}
						color='#fff'
					/>
				)}
				{iconLeft && !loading && (
					<StyledFontAwesomeButtonIcon
						size='lg'
						position='left'
						icon={iconLeft}
					/>
				)}
				{!loading && <span>{text}</span>}
				{iconRight && !loading && (
					<StyledFontAwesomeButtonIcon
						size='lg'
						position='right'
						icon={iconRight}
					/>
				)}
			</StyledButton>
		);
	},
	TextBox: function TextBox({
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
		const mask = createMask(maskType);
		const selectorData = `input ${createSelector(selector ? selector : label)}`;

		return (
			<Container size={size}>
				<Label htmlFor={label}>{label}</Label>
				<TextBoxDiv style={style} valid={valid}>
					<StyledInputMask
						id={label}
						name={"h-" + label}
						disabled={disabled}
						mask={mask}
						maskChar={maskChar}
						alwaysShowMask={alwaysShowMask}
						type='text'
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						data-test={selectorData}
					/>
					{iconRight && <StyledFontAwesomeIcon size='lg' icon={iconRight} />}
				</TextBoxDiv>
			</Container>
		);
	},
	DropDown: function DropDown(props) {
		const customStyles = {
			option: (provided, state) => ({
				...provided,
				color: "var(--Hgray2)",
				textAlign: "left",
				backgroundColor: state.isSelected ? "var(--Hgray11)" : "var(--Hwhite1)",
				"&:hover": {
					backgroundColor: !state.isSelected && "var(--Hgray12)",
				},
			}),
			menu: (provided) => ({
				...provided,
				top: "2em",
				zIndex: "20",
				borderRadius: "0px",
				backgroundColor: "var(--Hwhite1)",
			}),
			container: (provided) => ({
				...provided,
				width: "100%",
			}),
			control: (provided) => ({
				...provided,
				height: "3em",
				boxShadow: "1px 2px 3px var(--Hgray3)",
				border: props.valid
					? "1px solid var(--Hgray4)"
					: "1px solid var(--Hred1)",
				backgroundColor: "var(--Hwhite1)",
				fontSize: "14px",
				color: "var(--Hgray2)",
				borderRadius: "0px",
			}),
			singleValue: (provided) => ({
				...provided,
				color: "var(--Hgray2)",
			}),
			placeholder: (provided) => ({
				...provided,
				color: "var(--Hgray5)",
				fontSize: "14px",
				fontFamily: "Roboto",
			}),
			noOptionsMessage: (provided) => ({
				...provided,
				backgroundColor: "var(--Hwhite2)",
				borderRadius: "0px",
				fontFamily: "Roboto",
			}),
			multiValueRemove: (provided) => ({
				...provided,
				color: "var(--Hgray13)",
			}),
		};

		return (
			<Container size={props.size}>
				<Label htmlFor={props.label}>{props.label}</Label>
				<Select
					styles={customStyles}
					isSearchable={false}
					isLoading={props.loading}
					isDisabled={props.disabled}
					id={props.label}
					isMulti={props.multiple}
					placeholder={props.placeholder}
					theme={(theme) => ({
						...theme,
						colors: {
							...theme.colors,
							primary: "var(--Hgray4)",
							primary50: "var(--Hgray13)",
							dangerLight: "var(--Hblue1)",
							danger: "var(--Hnavy1)",
						},
					})}
					options={createSelectOptions({
						data: props.options,
						value: props.valueField,
						label: props.labelField,
						valueSort: props.orderByValue,
						noSorting: props.noOrder,
					})}
					onChange={(e) => {
						props.onChange(
							getSelectItem({
								e: e,
								multiple: props.multiple,
								options: props.options,
								valueField: props.valueField,
							})
						);
					}}
					value={
						props.value
							? createSelectOptions({
									data: props.multiple ? props.value : [props.value],
									value: props.valueField,
									label: props.labelField,
							  })
							: props.placeholder
					}
				/>
			</Container>
		);
	},
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
	style: PropTypes.object,
};

Heartland.TextBox.propTypes = {
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

Heartland.TextBox.defaultProps = {
	mask: "",
	maskChar: " ",
	alwaysShowMask: true,
	valid: true,
};

Heartland.DropDown.propTypes = {
	label: PropTypes.string.isRequired,
	labelField: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	valueField: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	multiple: PropTypes.bool,
	noOrder: PropTypes.bool,
	orderByValue: PropTypes.bool,
	placeholder: PropTypes.string,
	size: PropTypes.string,
	valid: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Heartland.DropDown.defaultProps = {
	valid: true,
	size: "medium",
};

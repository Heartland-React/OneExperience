import InputMask from "react-input-mask";
import "heartland-react/src/input.css";

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

	return (
		<div className={inputContainerStyle}>
			<label className='h-inputLabel' htmlFor={label}>
				{label}
			</label>
			<div className={textBoxClass} style={style}>
				<InputMask
					id={label}
					name={"h-" + label}
					disabled={disabled}
					mask={mask}
					maskChar={maskChar}
					alwaysShowMask={alwaysShowMask}
					className='h-textInput'
					type='text'
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					data-test={selectorData}
				/>
				{iconRight && (
					<FontAwesomeIcon
						size='lg'
						icon={iconRight}
						className='h-textIconRight'
					/>
				)}
			</div>
		</div>
	);
}

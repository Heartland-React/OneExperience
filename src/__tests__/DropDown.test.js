import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Heartland, createSelectOptions, getSelectItem } from "../index";

const data = [
	{ id: 1, name: "Tyrion Lannister", initial: "TL" },
	{ id: 2, name: "Peter Baelish", initial: "PB" },
	{ id: 3, name: "Joffrey Baratheon", initial: "JB" },
	{ id: 4, name: "Eddard Stark", initial: "ES" },
];

const DOWN_ARROW = { keyCode: 40 };

const defaultProps = {
	label: "Character",
	labelField: "name",
	valueField: "id",
	options: data,
	onChange: jest.fn(),
};

const testData = createSelectOptions({ data, value: "initial", label: "name" });

describe("DropDown component", () => {
	it("DropDown data returns proper structure", () => {
		expect(testData[0]).toHaveProperty("value");
		expect(testData[0]).toHaveProperty("label");
	});

	it("DropDown data sorts data in abc order", () => {
		expect(testData[0]).toHaveProperty("value", "ES");
	});

	it("DropDown data select item returns original object", () => {
		expect(
			getSelectItem({
				e: testData[0],
				multiple: false,
				options: data,
				valueField: "initial",
			})
		).toHaveProperty("name", "Eddard Stark");
	});

	it("DropDown data select item with multiple flag returns object list", () => {
		expect(
			getSelectItem({
				e: testData,
				multiple: true,
				options: data,
				valueField: "initial",
			})
		).toHaveLength(4);
	});

	describe("DropDown no selected value & click tests", () => {
		const handleChange = jest.fn();
		beforeEach(() => {
			render(
				<Heartland.DropDown
					{...defaultProps}
					onChange={handleChange}
					placeholder='Select a character...'
				/>
			);
		});

		it("displays menu options when down arrow is pressed", () => {
			fireEvent.keyDown(screen.getByLabelText(defaultProps.label), DOWN_ARROW);

			expect(screen.getByText(data[0].name)).toBeTruthy();
		});

		it("calls the correct function when user clicks a new option", () => {
			fireEvent.keyDown(screen.getByLabelText(defaultProps.label), DOWN_ARROW);
			fireEvent.click(screen.getByText(data[0].name));

			expect(handleChange).toHaveBeenCalled();
		});

		it("displays placeholder when it has been passed in", () => {
			expect(screen.getByText("Select a character...")).toBeTruthy();
		});
	});

	describe("Multiple Values Tests", () => {
		it("disallows multiple values when multiple prop is false", () => {
			const { queryByText } = render(
				<Heartland.DropDown
					{...defaultProps}
					value={[data[0], data[1]]}
					multiple={false}
				/>
			);

			expect(queryByText(data[1].name)).toBeNull();
		});

		it("allows for multiple values when multiple prop is true", () => {
			const { getByText } = render(
				<Heartland.DropDown
					{...defaultProps}
					value={[data[0], data[1]]}
					multiple
				/>
			);

			expect(getByText(data[0].name)).toBeTruthy();
			expect(getByText(data[1].name)).toBeTruthy();
		});
	});

	describe("Value & Placeholder Tests", () => {
		it("displays value when it has been passed in", () => {
			const { getByText } = render(
				<Heartland.DropDown {...defaultProps} value={data[0]} />
			);

			expect(getByText(data[0].name)).toBeTruthy();
		});

		it("displays value when both a value and placeholder have been provided", () => {
			const { getByText, queryByText } = render(
				<Heartland.DropDown
					{...defaultProps}
					value={data[0]}
					placeholder='Select a character...'
				/>
			);

			expect(getByText(data[0].name)).toBeTruthy();
			expect(queryByText("Select a character...")).toBeNull();
		});
	});
});

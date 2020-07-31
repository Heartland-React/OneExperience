import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Heartland } from "../index";

describe("TextInput component", () => {
	describe("Default TextInput mask Functionality", () => {
		const handleChange = jest.fn();
		beforeEach(() => {
			render(
				<Heartland.TextBox
					value='Apple'
					size='max'
					label='Fruit'
					onChange={handleChange}
				/>
			);
		});

		it("displays value passed in", () => {
			expect(screen.getByLabelText("Fruit").value).toBe("Apple");
		});

		it("fires onChange event when changed", () => {
			fireEvent.change(screen.getByLabelText("Fruit"), {
				target: { value: "Banana" },
			});
			expect(handleChange).toHaveBeenCalled();
		});
	});

	it("prevents alpha chars in phone number mask", () => {
		let emptyPhone = "(   )    -    ";

		const { getByLabelText } = render(
			<Heartland.TextBox
				value='abc'
				size='max'
				label='Phone Number'
				onChange={jest.fn()}
				maskType='phone'
			/>
		);

		expect(getByLabelText("Phone Number").value).toBe(emptyPhone);
	});

	it("limits to 5 numbers in zip code mask", () => {
		const { getByLabelText } = render(
			<Heartland.TextBox
				value='222227'
				size='max'
				label='Zip Code'
				onChange={jest.fn()}
				maskType='zip'
			/>
		);

		expect(getByLabelText("Zip Code").value).toBe("22222");
	});

	it("displays placeholder text when provided", () => {
		const { getByLabelText } = render(
			<Heartland.TextBox
				value=''
				size='max'
				label='Fruit'
				onChange={jest.fn()}
				placeholder='Enter a fruit'
			/>
		);

		expect(getByLabelText("Fruit").placeholder).toBe("Enter a fruit");
	});

	it("displays empty masks with provided maskChar", () => {
		const { getByLabelText } = render(
			<Heartland.TextBox
				value=''
				size='ssn'
				label='SSN'
				onChange={jest.fn()}
				maskType='ssn'
				maskChar='X'
			/>
		);

		expect(getByLabelText("SSN").value).toBe("XXX-XX-XXXX");
	});
});

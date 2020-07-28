import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Heartland } from "../index";

describe("Button component", () => {
	const handleChange = jest.fn();
	beforeEach(() => {
		render(
			<Heartland.Button
				data-testid='myButton'
				text='Apple'
				type='primary'
				onClick={handleChange}
			/>
		);
	});

	it("displays value passed in", () => {
		expect(
			screen.getByText((content, element) => {
				return element.tagName.toLowerCase() === "span" && content === "Apple";
			})
		).toBeTruthy();
	});

	it("fires onclick event when clicked", () => {
		fireEvent.click(
			screen.getByText((content, element) => {
				return element.tagName.toLowerCase() === "button";
			})
		);

		expect(handleChange).toHaveBeenCalled();
	});
});

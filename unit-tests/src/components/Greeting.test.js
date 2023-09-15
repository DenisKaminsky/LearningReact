import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
	test('has HelloWorld text', () => {
		render(<Greeting/>);
        
		const helloWorldElement = screen.getByText('Hello world!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('toggles text text when button is clicked', () => {
		render(<Greeting/>);

		const button = screen.getByRole("button");

		expect(screen.queryByText('Not clicked')).not.toBeNull();
		expect(screen.queryByText('Clicked')).toBeNull();

		fireEvent.click(button);        
		expect(screen.queryByText('Not clicked')).toBeNull();
		expect(screen.queryByText('Clicked')).not.toBeNull();

		fireEvent.click(button);        
		expect(screen.queryByText('Not clicked')).not.toBeNull();
		expect(screen.queryByText('Clicked')).toBeNull();
	});
});
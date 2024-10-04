import { render, screen } from "@testing-library/react";
import BookingForm, { updateTimes } from "./BookingForm";
import { initializeTimes } from "./BookingForm";

test("Renders the booking form labels", () => {
	render(<BookingForm />);
	const labels = ["Select a date:", "Occasion:"];
	labels.forEach((label) => {
		expect(screen.getByLabelText(label)).toBeInTheDocument();
	});

	const nonLabels = ["Select a time:", "Number of guests:"];
	nonLabels.forEach((label) => {
		expect(screen.getByText(label)).toBeInTheDocument();
	});
});

test("initializeTimes returns an array of 12 times", () => {
	const times = initializeTimes();
	expect(times.length).toBe(12);
});

test("updateTimes updates the times", () => {
	const updatedTimes = updateTimes([], { type: "UPDATE_TIMES" });
	expect(updatedTimes).toEqual(initializeTimes());
});

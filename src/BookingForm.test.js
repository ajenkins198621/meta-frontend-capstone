import { act, render, screen } from "@testing-library/react";
import BookingForm, { updateTimes } from "./BookingForm";
import { initializeTimes } from "./BookingForm";
import { MemoryRouter as Router } from "react-router-dom";

test("Renders the booking form labels", () => {
	render(
		<Router>
			<BookingForm />
		</Router>
	);
	const labels = ["Select a date:", "Occasion:"];
	labels.forEach((label) => {
		expect(screen.getByLabelText(label)).toBeInTheDocument();
	});

	const nonLabels = ["Select a time:", "Number of guests:"];
	nonLabels.forEach((label) => {
		expect(screen.getByText(label)).toBeInTheDocument();
	});
});

test("initializeTimes returns an array of random times", () => {
	const times = initializeTimes();
	expect(times.length).toBeGreaterThan(0);
});

test("updateTimes updates the times", () => {
	const updatedTimes = updateTimes([], { type: "UPDATE_TIMES" });
	expect(updatedTimes).toEqual(initializeTimes());
});

test("The date input is required", async () => {
	render(
		<Router>
			<BookingForm />
		</Router>
	);
	const dateInput = screen.getByLabelText("Select a date:");
	expect(dateInput).toBeRequired();
	const submitButton = screen.getByRole("button", { name: /Reserve Table/i });

	await act(async () => {
		submitButton.click();
		setTimeout(() => {
			expect(screen.getByText("Please select a date")).toBeInTheDocument();
		}, 0);
	});
});

test("The time input is required", async () => {
	render(
		<Router>
			<BookingForm />
		</Router>
	);
	const submitButton = screen.getByRole("button", { name: /Reserve Table/i });

	await act(async () => {
		submitButton.click();
		setTimeout(() => {
			expect(screen.getByText("Please select a time")).toBeInTheDocument();
		}, 0);
	});
});

test("The occassion input is required", async () => {
	render(
		<Router>
			<BookingForm />
		</Router>
	);
	const dateInput = screen.getByLabelText("Select a date:");
	expect(dateInput).toBeRequired();
	const submitButton = screen.getByRole("button", { name: /Reserve Table/i });

	await act(async () => {
		submitButton.click();
		setTimeout(() => {
			expect(screen.getByText("Please select an occasion")).toBeInTheDocument();
		}, 0);
	});
});

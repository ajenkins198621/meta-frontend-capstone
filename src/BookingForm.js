import BookingSlot from "./BookingSlot";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => {
	return fetchAPI(new Date()); // fetch data from API
};

export const updateTimes = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			return fetchAPI(new Date());
		default:
			return state;
	}
};

const BookingForm = () => {
	const navigate = useNavigate();

	const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

	const [date, setDate] = useState("");
	const [dateError, setDateError] = useState("");
	const [time, setTime] = useState("");
	const [timeError, setTimeError] = useState("");
	const [numberGuests, setNumberGuests] = useState(2);
	const [occasion, setOccasion] = useState("");
	const [occasionError, setOccasionError] = useState("");

	const formatDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	};

	const today = new Date();

	const submitForm = () => {
		setDateError(!date ? "Please select a date" : "");
		setTimeError(!time ? "Please select a time" : "");
		setOccasionError(!occasion ? "Please select an occasion" : "");
		if (!occasion) {
			setOccasionError("Please select an occasion");
		}
		if (!date || !time || !occasion) {
			return;
		}
		const formData = {
			date,
			time,
			numberGuests,
			occasion,
		};
		const submission = submitAPI(formData);
		if (submission) {
			navigate("/booking/confirmation");
		}
	};

	return (
		<div className="booking-form">
			<div className="input-group">
				<label htmlFor="date">Select a date:</label>
				<select
					onChange={(e) => {
						setDate(e.target.value);
						setDateError("");
					}}
					value={date}
					id="date"
					required={true}
					aria-label="Date selection for booking"
				>
					<option value={""}>-- Please Select --</option>
					{[...Array(30)].map((i, idx) => {
						const date = new Date(today);
						date.setDate(today.getDate() + idx);
						const formattedDate = formatDate(date);
						return (
							<option key={idx} value={formattedDate}>
								{formattedDate}
							</option>
						);
					})}
				</select>
				{dateError && <div className="error">{dateError}</div>}
			</div>
			<div className="input-group">
				<span>Select a time:</span>
				<div className="booking-slot-container">
					{availableTimes.map((t, idx) => (
						<BookingSlot
							key={idx}
							isAvailable={true}
							isSelected={t === time}
							value={t}
							onClick={() => {
								setTime(t);
								setTimeError("");
							}}
						/>
					))}
				</div>
				{timeError && <div className="error">{timeError}</div>}
			</div>
			<div className="input-group">
				<span>Number of guests:</span>
				<div className="button-selector">
					<button
						disabled={numberGuests <= 1}
						onClick={() => {
							setNumberGuests((prev) => {
								if (prev <= 1) return prev;
								return prev - 1;
							});
						}}
						aria-label="Decrease number of guests"
					>
						-
					</button>{" "}
					<span>{numberGuests}</span>{" "}
					<button
						disabled={numberGuests >= 8}
						onClick={() => {
							setNumberGuests((prev) => {
								if (prev >= 8) return prev;
								return prev + 1;
							});
						}}
						aria-label="Increase number of guests"
					>
						+
					</button>
				</div>
			</div>
			<div className="input-group">
				<label htmlFor="occasion">Occasion:</label>
				<select
					onChange={(e) => {
						setOccasion(e.target.value);
						setOccasionError("");
					}}
					value={occasion}
					id="occasion"
					required={true}
					aria-label="Select occasion for reservation"
				>
					<option value={""}>-- Please Select --</option>
					<option value={"Birthday"}>Birthday</option>
					<option value={"Anniversary"}>Anniversary</option>
					<option value={"Date Night"}>Date</option>
					<option value={"Business"}>Business</option>
					<option value={"Other"}>Other</option>
				</select>
				{occasionError && <div className="error">{occasionError}</div>}
			</div>
			<button onClick={submitForm}>Reserve Table</button>
		</div>
	);
};

export default BookingForm;

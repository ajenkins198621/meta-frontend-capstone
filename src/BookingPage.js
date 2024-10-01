import { useState } from "react";
import App from "./App";

const Booking = () => {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [numberGuests, setNumberGuests] = useState(2);

	const formatDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	};

	const today = new Date();

	return (
		<App>
			<div className="container">
				<h2>Reserve a Table</h2>
				<div className="booking">
					<div className="booking-form">
						<div className="input-group">
							<label htmlFor="date">Select a date:</label>
							<select onChange={(e) => setDate(e.target.value)} value={date} id="date">
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
						</div>
						<div className="input-group">
							<label htmlFor="time">Select a time:</label>
							<select onChange={(e) => setTime(e.target.value)} value={time} id="time">
								<option value={""}>-- Please Select --</option>
								{[
									"11:00 AM",
									"12:00 PM",
									"1:00 PM",
									"2:00 PM",
									"3:00 PM",
									"4:00 PM",
									"5:00 PM",
									"6:00 PM",
									"7:00 PM",
									"8:00 PM",
									"9:00 PM",
									"10:00 PM",
								].map((time, idx) => (
									<option key={idx} value={time}>
										{time}
									</option>
								))}
							</select>
						</div>
						<div className="input-group">
							<label htmlFor="guests">Number of guests:</label>
							<div className="button-selector">
								<button
									disabled={numberGuests <= 1}
									onClick={() => {
										setNumberGuests((prev) => {
											if (prev <= 1) return prev;
											return prev - 1;
										});
									}}
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
								>
									+
								</button>
							</div>
						</div>
						<button disabled={date === "" || time === ""} onClick={() => alert("Reserve a table?")}>
							Reserve Table
						</button>
					</div>
					<div className="booking-image-container">
						<img src="/restaurant.jpg" alt="Booking Pic" />
					</div>
				</div>
			</div>
		</App>
	);
};

export default Booking;

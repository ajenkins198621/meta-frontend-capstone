import App from "./App";
import BookingForm from "./BookingForm";

const Booking = () => {
	return (
		<App>
			<div className="container">
				<h2>Reserve a Table</h2>
				<div className="booking">
					<BookingForm />
					<div className="booking-image-container">
						<img src="/restaurant.jpg" alt="Booking Pic" />
					</div>
				</div>
			</div>
		</App>
	);
};

export default Booking;

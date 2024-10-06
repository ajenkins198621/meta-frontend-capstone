import App from "./App";

const ConfirmedBookingPage = () => {
	return (
		<App>
			<div className="container">
				<h2>&nbsp;</h2>
				<div className="booking">
					<div>
						<h2>Your reservation is confirmed!</h2>
						<p>We'll see you soon!</p>
					</div>
					<div className="booking-image-container">
						<img src="/restaurant.jpg" alt="Booking Pic" />
					</div>
				</div>
			</div>
		</App>
	);
};

export default ConfirmedBookingPage;

const BookingSlot = ({ isAvailable, isSelected, setTime, value, onClick }) => {
	return (
		<button
			aria-label={`Select ${value} booking time`}
			className={`booking-slot${isSelected ? " selected" : ""}`}
			disabled={!isAvailable}
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default BookingSlot;

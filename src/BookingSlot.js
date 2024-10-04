const BookingSlot = ({ isAvailable, isSelected, setTime, value, onClick }) => {
	return (
		<button className={`booking-slot${isSelected ? " selected" : ""}`} disabled={!isAvailable} onClick={onClick}>
			{value}
		</button>
	);
};

export default BookingSlot;

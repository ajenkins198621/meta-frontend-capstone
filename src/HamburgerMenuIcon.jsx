const HamburgerMenuIcon = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2 22H38M2 12H38M2 2H38"
					stroke="#495E57"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	);
};

export default HamburgerMenuIcon;

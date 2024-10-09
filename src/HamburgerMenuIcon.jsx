const HamburgerMenuIcon = ({ onClick }) => {
	return (
		<button onClick={onClick} aria-label="Open navigation">
			<svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2 22H38M2 12H38M2 2H38"
					stroke="#495E57"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export default HamburgerMenuIcon;

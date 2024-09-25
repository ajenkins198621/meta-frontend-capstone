import Menu from "./Nav";

const Header = () => {
	return (
		<div className="container">
			<header>
				<img src="/Logo.svg" alt="Little Lemon logo" className="logo" />
				<Menu />
			</header>
		</div>
	);
};

export default Header;

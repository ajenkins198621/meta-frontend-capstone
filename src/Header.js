import Menu from "./Nav";

const Header = () => {
	return (
		<header>
			<img src="/Logo.svg" alt="Little Lemon logo" className="logo" />
			<Menu />
		</header>
	);
};

export default Header;

import { useState } from "react";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import Nav from "./Nav";
import { useRef } from "react";
import { useEffect } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<div className="container">
			<header>
				<a href="/">
					<img src="/Logo.svg" alt="Little Lemon logo" className="logo" />
				</a>
				<div ref={menuRef} className="hamburger-menu">
					<HamburgerMenuIcon
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					/>
				</div>
				<div className={`main-nav${isMenuOpen ? " menu-open" : ""}`}>
					<Nav />
				</div>
			</header>
		</div>
	);
};

export default Header;

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<img alt="Little Lemon Logo" src="/logo192.png" />

				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Menu</a>
						</li>
						<li>
							<a href="/">Reservations</a>
						</li>
						<li>
							<a href="/">Order Online</a>
						</li>
						<li>
							<a href="/">Login</a>
						</li>
					</ul>
				</nav>

				<div>
					<p>Address</p>
					<p>Phone #</p>
					<p>Email</p>
				</div>

				<div>
					<p>Facebook</p>
					<p>X</p>
					<p>TikTok</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

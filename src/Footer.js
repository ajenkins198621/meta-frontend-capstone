import Nav from "./Nav";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-inner">
					<div>
						<img alt="Little Lemon Logo" src="/lemon-large.png" />
					</div>
					<div className="footer-nav">
						<Nav />
					</div>

					<div className="address">
						<p>
							<strong>Contact Us:</strong>
						</p>
						<p>1234 Main Street</p>
						<p>Denver, CO 81234</p>
						<p>(310) 123-4567</p>
						<p>littlelemon@test.com</p>
					</div>

					<div className="address">
						<p>
							<strong>Socials:</strong>
						</p>
						<p>
							<a href="facebook.com">Facebook</a>
						</p>
						<p>
							<a href="twitter.com">Twitter</a>
						</p>
						<p>
							<a href="instagram.com">Instagram</a>
						</p>
						<p>
							<a href="pinterest.com">Pinterest</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

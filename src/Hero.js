import Button from "./Button";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero-inner">
					<div className="description">
						<h2>Little Lemon</h2>
						<h3>Denver</h3>
						<p>
							We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
						</p>

						<Button asLink href="/booking" aria-label="Reserve a table at Little Lemon">
							Reserve a Table
						</Button>
					</div>
					<div>
						<img src="/hero-pic.png" alt="Hero Pic" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

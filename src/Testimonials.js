import StarIcon from "./StarIcon";

const Testimonial = ({ rating, name, image, review }) => {
	return (
		<div className="testimonial">
			<div className="name-row">
				<img src={image} alt={name} />
				<div className="name-column">
					<span>{name}</span>
					<div className="rating-row">
						{[...Array(rating)].map((i, idx) => (
							<StarIcon key={idx} isFilled={true} />
						))}
						{[...Array(5 - rating)].map((i, idx) => (
							<StarIcon key={idx} isFilled={false} />
						))}
					</div>
				</div>
			</div>
			<i className="comment">"{review}"</i>
		</div>
	);
};

const Testimonials = () => {
	return (
		<div className="testimonials">
			<div className="container">
				<div className="testimonial-inner">
					<h2>Testimonials</h2>
					<div className="testimonials-list">
						<Testimonial
							image="/emily-thompson.jpg"
							rating={4}
							name="Emily Thompson"
							review="Absolutely love the fresh and healthy options—this is my go-to spot in Denver!"
						/>
						<Testimonial
							rating={5}
							image="/david-martinez.png"
							name="David Martinez"
							review="Their quinoa bowl is the best I’ve had, and I always leave feeling energized and satisfied."
						/>
						<Testimonial
							rating={5}
							image="/sarah-nguyen.png"
							name="Sarah Nguyen"
							review="A gem in Denver for anyone looking for delicious, health-conscious meals!"
						/>
						<Testimonial
							rating={4}
							image="/james-walker.png"
							name="James Walker"
							review="Finally found a place where I can indulge guilt-free—the salads and smoothies are fantastic!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;

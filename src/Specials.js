import Button from "./Button";
import DeliveryIcon from "./DeliveryIcon";

const Special = ({ imgSrc, title, price, description }) => {
	return (
		<div className="special">
			<img src={imgSrc} alt={title} />
			<div className="description">
				<div>
					<div className="title-row">
						<span>{title}</span>
						<span className="price">{price}</span>
					</div>
					<p>{description}</p>
				</div>
				<a href="#">
					<span>Order a delivery</span> <DeliveryIcon />
				</a>
			</div>
		</div>
	);
};

const Specials = () => {
	return (
		<div className="specials">
			<div className="container">
				<div className="intro">
					<h2>This Week's Specials</h2>
					<Button onClick={() => alert("Go to online menu")}>Online menu</Button>
				</div>
				<div className="specials-list">
					<Special
						imgSrc="/greek-salad.jpg"
						title="Greek Salad"
						price="$12.99"
						description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
					/>
					<Special
						imgSrc="/bruschetta.jpg"
						title="Bruschetta"
						price="$5.99"
						description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
					/>
					<Special
						imgSrc="/lemon-dessert.jpg"
						title="Lemon Dessert"
						price="$5.00"
						description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
					/>
				</div>
			</div>
		</div>
	);
};

export default Specials;

import About from "./About";
import App from "./App";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = () => {
	return (
		<App>
			<Hero />
			<Specials />
			<Testimonials />
			<About />
		</App>
	);
};

export default Main;

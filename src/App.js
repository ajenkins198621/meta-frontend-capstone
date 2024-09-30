import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import Product from "./Components/Product";
import { Container } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<Product />
			</Container>
		</div>
	);
}

export default App;

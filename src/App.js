import "./App.css";
import { useState } from "react";
import Section from "./components/section/index";

function App() {
	let [currentCard, setCurrentCard] = useState("");
	const handleCardChange = value => {
		setCurrentCard(value);
	};
	return (
		<div
			className='App'
			onClick={() => {
				if(currentCard !== ""){
          handleCardChange("");
        }
			}}>
			<Section currentCard={currentCard} changeCard={handleCardChange} />
		</div>
	);
}

export default App;

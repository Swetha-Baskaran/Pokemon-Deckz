import "./style.css";
import Card from "../card";

const CardList = ({ type, currentCard, changeCard }) => {
	return (
		<>
			<section className='card-grid'>
				{type !== null &&
					type.map((e, index) => {
						return (
							<Card
								key={index}
								value={e}
								style={currentCard === e.number ? customStyle.cardFocus : ""}
								currentCard={currentCard}
								changeCard={changeCard}
							/>
						);
					})}
			</section>
		</>
	);
};

export default CardList;

const customStyle = {
	cardFocus : {
		color : "red",
	}
}
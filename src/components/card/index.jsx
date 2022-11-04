import React, { useEffect, useRef } from "react";
import "./card-glare.css";
import "./card-shine.css";
import "./card.css";

const Card = ({ value, currentCard, changeCard }) => {
	const cardBack =
		"https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg";
	return (
		<div className='card-wrap'>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div className='mouse'></div>
			<div
				data-rarity={value.rarity}
				data-number={value.number}
				data-subtypes={value.subtypes}
				data-supertype={value.supertype}
				data-gallery={value.gallery}
				className={`card ${value.id === currentCard ? "currentCard" : ""}`}
				onClick={() => {
					changeCard(value.id === currentCard ? "" : value.id);
					console.log(value.id === currentCard ? value.id : "");
				}}>
				<div className='card__translater'>
					<div className='card__rotator'>
						<img className='card__back' src={cardBack} alt='' />
						<div className='card__front'>
							<img src={value?.images.large} alt='' />
							<div className='card__shine' />
							<div className='card__glare' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

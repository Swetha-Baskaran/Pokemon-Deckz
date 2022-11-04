import { useEffect, useState } from "react";
import CardList from "../cardList";
import cards from "../../helper/data.json";
import Card from "../card";
import "../page.css";
import data from "../../helper/data.json";

const Section = ({ currentCard, changeCard }) => {
	let [type, setType] = useState({
		basics: null,
		holos: null,
		galaxies: null,
		radiant: null,
		basicGallery: null,
		vee: null,
		veeUltra: null,
		veeAlt: null,
		veeMax: null,
		veeMaxAlt: null,
		veeStar: null,
		trainerHolo: null,
		rainbow: null,
		gold: null,
		veeGallery: null,
	});
	useEffect(() => {
		setType({
			basics: cards.slice(0, 6),
			holos: cards.slice(6, 12),
			galaxies: cards.slice(12, 15),
			radiant: cards.slice(15, 18),
			basicGallery: cards.slice(60, 63),
			vee: cards.slice(18, 21),
			veeUltra: cards.slice(21, 24),
			veeAlt: [...cards.slice(27, 30), ...cards.slice(33, 36)],
			veeMax: cards.slice(24, 27),
			veeMaxAlt: [cards[36], cards[31], cards[37]],
			veeStar: cards.slice(39, 42),
			trainerHolo: cards.slice(42, 48),
			rainbow: cards.slice(48, 51),
			gold: cards.slice(51, 60),
			veeGallery: cards.slice(63, 69),
		});
	}, []);
	return (
		<>
			<header>
				<h1>
					Pokemon Cards <sup>V2</sup>
				</h1>
				<section className='intro'>
					<p>
						A collection of <mark>advanced CSS</mark> styles to create
						<mark>realistic-looking effects</mark> for the faces of
						Pokemon cards.
					</p>
					<br />
					<p>
						The cards use <mark>3d transforms</mark>, <mark>filters</mark>
						, <mark>blend modes</mark>, and interactions to provide a
						unique experience when taking a closer look!
					</p>
				</section>

				<div className='showcase'>
					<Card
						value={data[23]}
						currentCard={currentCard}
						changeCard={changeCard}
					/>
				</div>

				<section className='info'>
					<h2>
						<em>
							(Go ahead, try clicking a card to take a closer look!)
						</em>
					</h2>

					<hr />

					<p className='small'>
						Under the hood, I'm using SvelteJS to handle interactivity and
						state; assigning values to css custom properties (variables)
						which in-turn drive the effects and 3d transforms.{" "}
						<a href='https://github.com/simeydotme/pokemon-cards-css'>
							Source code is in the repository
						</a>
						, but it's subject to change as I morph it in to an actual
						App.
					</p>
				</section>
			</header>
			<h2>Common &amp; Uncommon</h2>
			<p>
				All cards get a 3d rotation with CSS based on the cursor position.
				<br /> The default basic non-holo cards simply apply a{" "}
				<mark>flare/glare effect</mark> to the card which follows the mouse.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.basics}
			/>

			<h2>Holofoil Rare</h2>
			<p>
				Holo cards have an additional <mark>vertical beam holo effect</mark>
				. <br /> This uses a combintation of{" "}
				<mark>repeating gradients and filters</mark>, with{" "}
				<mark>clip-path</mark> to mask the holo areas for each stage. To get
				the holo effect to change while rotating the card I set the
				background-position of each gradient layer based on cursor.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.holos}
			/>

			<h2>Galaxy/Cosmos Holofoil</h2>
			<p>
				Similar to the Holofoil, but this uses a special image{" "}
				<mark>background of a galaxy effect</mark>
				with a{" "}
				<mark>gradient rainbow set to color-dodge &amp; color-burn</mark> on
				top.
			</p>
			<h3>An instant classic for any PTCG fan!</h3>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.galaxies}
			/>

			<h2>Radiant Holofoil</h2>
			<p>
				The newest holofoil added to the series! <br /> The radiant effect
				proved
				<mark>very difficult to emulate</mark>
				without crazy math, so I settled with a{" "}
				<mark>criss-cross linear gradient pattern</mark> that moves across
				the card.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.radiant}
			/>

			<h2>Trainer Gallery Holofoil</h2>
			<p>
				The effect for Trainer Gallery holofoils gives it a{" "}
				<mark>kind of metallic effect with iridescent shine</mark>. This is
				achieved with a <mark>large color dodge linear gradient</mark>, and
				a<mark>hard-light radial gradient</mark> on top, at the cursor
				position, to give the shimmer.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.basicGallery}
			/>

			<h2>Pokemon V</h2>
			<p>
				V cards have a <mark>diagonal holographic effect</mark> which that
				appears to travel in opposite directions when you tilt the card into
				the light.
			</p>
			<p>
				This effect is achieved with{" "}
				<mark>multiple background gradients</mark> and I change the
				background positions based on the cursor x/y. The gradients are set
				to color-dodge, and there's a subtle svg noise effect.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.vee}
			/>

			<h2>
				Pokemon V <sup>(Full Art)</sup>
			</h2>
			<p>
				Similar to the Pokemon V effect, Full-Art cards{" "}
				<mark>use diagonal gradients</mark>, but they have{" "}
				<mark>additional texture</mark> when looked at from certain angles.
				This is achieved with an{" "}
				<mark>additional background image with an exclusion filter</mark>.
				The effect is also more vibrant which adds to the metallic look.
			</p>
			<p>
				The texture effect is not identical to reality as the real cards
				each have a unique pattern that follows the art.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeUltra}
			/>

			<h2>
				Pokemon V <sup>(Alternate Art)</sup>
			</h2>
			<p>
				Alternate Art Pokemon V cards have{" "}
				<mark>
					practically the same holo effect as the Ultra Rare (Full Art)
					cards
				</mark>
				. The only difference is the pattern texture.
			</p>
			<p>
				The effect looks somewhat different though due to the type of
				artwork.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeAlt}
			/>

			<h2>VMax</h2>
			<p>
				The gradient effect of Pokemon VMax is more subtle, using a{" "}
				<mark>larger background gradient</mark>
				which moves more slowly. But the{" "}
				<mark>texture effect is more pronounced</mark>.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeMax}
			/>

			<h2>
				VMax <sup>(Alternate/Rainbow)</sup>
			</h2>
			<p>
				There's some VMax cards which show a{" "}
				<mark>full, or alternate artwork</mark>. These are
				<mark>classed as "raindbow rare"</mark>
				and have a similar effect to the rainbow cards. It's a really
				<mark>vibrant and glittery overlay</mark>.
			</p>
			<p>
				This is achieved with a{" "}
				<mark>background image of glitter/sparkles</mark>, and a texture
				pattern background image, sandwiching the usual linear gradients.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeMaxAlt}
			/>

			<h2>VStar</h2>
			<p>
				Again back to the{" "}
				<mark>diagonal gradients overlaying a texture</mark>, VStar are
				quite
				<mark>similar to teh Ultra Rare</mark>
				(Full/Alt) cards. The cards are generally{" "}
				<mark>brighter with a pastel hue</mark>, though, which makes the
				gradient and texture more subtle.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeStar}
			/>

			<h2>
				Trainer Holo <sup>(Full Art)</sup>
			</h2>
			<p>
				Again back to the{" "}
				<mark>diagonal gradients overlaying a texture</mark>, VStar are
				quite
				<mark>similar to teh Ultra Rare</mark>
				(Full/Alt) cards. The cards are generally{" "}
				<mark>brighter with a pastel hue</mark>, though, which makes the
				gradient and texture more subtle.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.trainerHolo}
			/>

			<h2>
				Rainbow Rare <sup>(VMax, VStar)</sup>
			</h2>
			<p>
				The Rainbow Rare is a{" "}
				<mark>super glittery effect on top of pastel gradients</mark>. This
				is achieved with a background image of glitter/sparkles and a
				<mark>color-burn/hard-light background blend</mark> for some pastel
				gradients.
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.rainbow}
			/>

			<h2>
				Secret Rare <sup>(Gold)</sup>
			</h2>
			<p>
				GOLD! The effect from Rainbow is borrowed, except the color of the
				gradients, and the filter effects (hue) are different. There's also
				a different background image with a more subtle overlay. This gives
				a sparkly gold look which is very similar to reality!
			</p>
			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.gold}
			/>

			<h2>
				Trainer Gallery <sup>(V / VMax)</sup>
			</h2>
			<p>
				The V and VMax cards in the Trainer Gallery are generally quite
				similar to the normal V and VMax cards, so here I've just tweaked
				the values a little and added a different background texture.
			</p>

			<CardList
				currentCard={currentCard}
				changeCard={changeCard}
				type={type.veeGallery}
			/>
		</>
	);
};

export default Section;

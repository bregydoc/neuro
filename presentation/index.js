// Import React
import React from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "normalize.css";

const theme = createTheme(
	{
		primary: "white",
		secondary: "#FF5368",
		tertiary: "#00E0C4",
		quarternary: "#FFD981"
	},
	{
		primary: "Montserrat",
		secondary: "Helvetica"
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={["zoom", "slide"]}
				transitionDuration={500}
				theme={theme}
				progress="bar"
			>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading
						size={1}
						fit
						caps
						lineHeight={1}
						textColor="secondary"
					>
						Neuro Research
					</Heading>
					<Text textColor="tertiary" size={2} fit>
						Research (or not) about EEG and classification
						algorithms
					</Text>
				</Slide>
				<Slide transition={["slide"]} bgColor="tertiary">
					<Heading
						size={1}
						fit
						caps
						lineHeight={1}
						textColor="primary"
					>
						State of the art
					</Heading>
				</Slide>
				<Slide>
					<Heading size={3} caps textColor="secondary">
						Classification of EEG with Recurrent Neural Networks
					</Heading>
				</Slide>
				<Slide>
					<Heading fit caps bold textColor="tertiary">
						What they did?
					</Heading>
					<Text margin="40px 0 0 0" lineHeight={1}>
						They tried to classify whether someone is viewing a 2D
						or 3D image (DP3). With emphasis on Neural Networks
						Classificators, particulary Recurrent Neural Networks.
					</Text>
				</Slide>
			</Deck>
		);
	}
}

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
	Image,
	Slide,
	Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "normalize.css";

import neuroBg from "../assets/brainb01.png";

import ElmanNets from "./elman_nets";
import DeepNets from "./deep_nets";
import SpikingNets from "./spiking_nets";
import GanNets from "./gan_nets";
import ChaoticNet from "./chaotic_nets";

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
					<Image src={neuroBg} />
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
				{ElmanNets}
				{DeepNets}
				{SpikingNets}
				{GanNets}
				{ChaoticNet}
			</Deck>
		);
	}
}

import React, { Component } from "react";

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
	Text,
	Layout
} from "spectacle";

import chaosNet from "../assets/chaos.png";

import chaosMSE from "../assets/chaos_mse.png";
import chaosTable from "../assets/chaos_table.png";

const ChaoticNet = [
	<Slide>
		<Heading size={5} caps textColor="secondary">
			Motor imagery classification for Brain-Computer Interfaces through a
			chaotic neural network
		</Heading>
		<Image src={chaosNet} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="tertiary">
			What they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			In this paper the authors try to{" "}
			<b>
				improve the motor imagenery classification, specially control
				states
			</b>, using an online brain-computer interfaces (BCI) using{" "}
			<b>
				K-sets are chaotic neural networks based on the olfactory bulb
				function
			</b>. They choosed this method because CHNN are good for work with
			noisy signals.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			Fot his work they choosed use only 3 electrodes (C3, C4, Cz) and the
			BCI Competition{" "}
			<b>
				IV Dataset I which contains recorded data from 4 human subjects
				and 3 computer generated artificial datasets
			</b>. The most interesting thing behind this work was how they made
			a <b>KIII for work better in the noisy EEG signals</b>.
		</Text>
	</Slide>,
	<Slide>
		<Heading size={2} caps bold textColor="tertiary">
			Conclusions
		</Heading>
		<Text>Here, we can see MSE comparation graph.</Text>
		<Layout>
			<Image src={chaosMSE} />
		</Layout>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>Two tables for compare results.</Text>
		<Image src={chaosTable} />
	</Slide>
];

export default ChaoticNet;

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
	Text
} from "spectacle";

import deepImage from "../assets/deep.png";

import deepTable1 from "../assets/deep_table1.png";
import deepTable2 from "../assets/deep_table2.png";

import deepDouble from "../assets/deep_double.png";

const ElmanNets = [
	<Slide>
		<Heading size={5} caps textColor="secondary">
			Deep Convolutional Neural Networks for Mental Load Classification
			based on EEG Data
		</Heading>
		<Image src={deepImage} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="tertiary">
			What they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They used Deep Convolutional Neural Networks for understand their
			effectiveness in decoding electroencephalography (EEG) signals for
			mental load related to <b>memory process</b>, with a special
			emphasys to evaluate <b>many configurations for DCNN</b>.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They had EEG data of 21 channels (7-frame data and each frame is
			composed of theta, alpha, and beta maps). Their used 6 differents
			models of CNN and 5 another models to compare. Their data for train
			and test was categorize and each EEG data represent individual
			mental load of different capacities during working memory tasks.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>Their results for CNN models</Text>
		<Image src={deepTable1} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>
			Another way to combining (fuse) two DCNN for improve their
			classification method
		</Text>
		<Image src={deepDouble} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>Results about fused models</Text>
		<Image src={deepTable2} />
	</Slide>
];

export default ElmanNets;

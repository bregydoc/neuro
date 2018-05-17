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

import rnnImage from "../assets/rnn.png";
import rnnTable1 from "../assets/rnn_table1.png";

const ElmanNets = [
	<Slide>
		<Heading size={4} caps textColor="secondary">
			Classification of EEG with Recurrent Neural Networks
		</Heading>
		<Image src={rnnImage} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="tertiary">
			What they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They tried to classify whether someone is viewing a 2D or 3D image
			(DP3). With emphasis on Neural Networks Classificators, particulary
			Recurrent Neural Networks.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They worked with 3 model for classify DP3 signal, the first model
			only was a <b>Simple Multi-layer Perceptron</b>, the second: an{" "}
			<b>Elman Recurrent Neural Network</b> and the last model was a{" "}
			<b>Time-dependent Elman Recurrent Neural Network</b>. They used an
			80-10-10 split data for train, dev and test respectly.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>They obteined that...</Text>
		<Image src={rnnTable1} />
		<Text fit>
			Is not easy use RNN and they says is necessary improve de complexity
			of their model of RNN. But for this case where the EEG is by nature
			sequences of vectors, as words are, the relationship from one
			element in the sequence to the next must be different. is better to
			use a simple feedfordward nets.
		</Text>
	</Slide>
];

export default ElmanNets;

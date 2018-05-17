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

import spikingNet from "../assets/spiking.png";

import spikingDataset1 from "../assets/spiking_dataset.png";
import spikingTable1 from "../assets/spiking_table1.png";

const SpikingNets = [
	<Slide>
		<Heading size={5} caps textColor="secondary">
			Evaluating Spiking Neural Models in the Classification of Motor
			Imagery EEG Signals using Short Calibration Sessions.
		</Heading>
		<Image src={spikingNet} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="tertiary">
			What they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			This paper talk about the use of the <b>Spiking Neural Model</b> for
			improve the time of classification for a common mental task:{" "}
			<b>Motor Imagery</b>. For this goal they made a short calibration
			session and feature extraction before of classification stage.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They had 3 different dataset, each dataset had a lot of information
			of at least 3 subjects. We can see their dataset below.
		</Text>
		<Image src={spikingDataset1} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			The method for train their SNM was Particle swarm optimization. Also
			they{" "}
			<b>splitted their datasets into 50, 40, 30, 20 and 10 percent</b>{" "}
			for evaluate the fitness of the SNM in each case with different data
			density.
		</Text>
	</Slide>,

	<Slide>
		<Heading size={3} caps bold textColor="tertiary">
			Conclusions
		</Heading>
		<Text>
			Here, we can see their results compared with another algorithms.
		</Text>
		<Image src={spikingTable1} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>
			<b>SNM have a advantage for classify motor imagery movements</b>. In
			few cases, the RBF and the FNN achieved a better accuracy than the
			SNM, however, those models in average require more than 30 neurons
			to obtain that results, <b>whereas the SNM only one neuron</b>.
		</Text>
	</Slide>
];

export default SpikingNets;

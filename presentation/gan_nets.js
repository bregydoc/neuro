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

import ganNet from "../assets/gan.png";

import ganMethod from "../assets/gan_method.png";

import ganResults1 from "../assets/gan_good_results.png";
import ganResults2 from "../assets/gan_bad_results.png";

const GANNets = [
	<Slide>
		<Heading size={5} caps textColor="secondary">
			Generative Adversarial Networks Conditioned by Brain Signals
		</Heading>
		<Image src={ganNet} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="tertiary">
			What they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			This paper try to use a modern GAN algorithm for find a relation
			between eeg signals and image generated from there{" "}
			<b>
				(Encoder from EEG signals to discriminate between visual object
				categories)
			</b>. Virtually they tried to "read the mind".
		</Text>
	</Slide>,
	<Slide>
		<Heading size={4} caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Image src={ganMethod} />
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			Six subjects partecipated in the experiment and were shown images of
			objects while EEG data was recorded.{" "}
			<b>
				The subjects were shown 50 images from 40 different object
				classes4 for a total of 2,000 images per subject.
			</b>{" "}
			Each image class was presented in bursts of 25 seconds (0.5 second
			per image) followed by a 10 seconds pause where a black image was
			shown.
		</Text>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="quarternary">
			How they did?
		</Heading>
		<Text margin="40px 0 0 0" lineHeight={1}>
			They used the actiCAP5 cap with 128 active lowimpedance, low-noise
			electrodes. <b>Four 32-channel</b> Brainvision high-precision,
			low-latency signal amplifiers were used (exact model: BrainAmp DC).
		</Text>
	</Slide>,
	<Slide>
		<Heading size={2} caps bold textColor="tertiary">
			Conclusions
		</Heading>
		<Text>Here, we can see their results (Generative part).</Text>
		<Layout>
			<Image src={ganResults1} />
			<Image src={ganResults2} />
		</Layout>
	</Slide>,
	<Slide>
		<Heading fit caps bold textColor="">
			Conclusions
		</Heading>
		<Text>
			In this work we showed that brain activity signals can be
			successfully analyzed to{" "}
			<b>
				drive the generation of images depicting similar objects as
				those being observed by a subject when those signals were
				recorded
			</b>.
		</Text>
	</Slide>
];

export default GANNets;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import brain from '../assets/images/brainb01.png';

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	padding: 30px;
	${props => {
		if (props.isMobile) {
			return css`
				flex-flow: column;
			`;
		} else {
			return css``;
		}
	}};
`;

const WrapperText = styled.div`
	display: flex;
	flex-flow: column;
	margin-top: 20px;
`;

const Question = styled.div`
	font-family: 'Nunito Sans', sans-serif;
	font-weight: 900;

	color: #ffd13c;
	text-transform: uppercase;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 42px;
				text-align: center;
			`;
		} else {
			return css`
				font-size: 69px;
			`;
		}
	}};
`;

const BodyText = styled.div`
	font-family: 'Nunito Sans', sans-serif;

	color: #464646;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 16px;
				line-height: 30px;
				padding: 5px 6vw 5px 6vw;
				margin-bottom: 10vh;
			`;
		} else {
			return css`
				line-height: 35px;
				font-size: 18px;
				padding-left: 20px;
			`;
		}
	}};
`;

const ResponseImage = styled.img`
	${props => {
		if (props.isMobile) {
			return css`
				height: auto;
				width: 55vw;
				padding: 10px 0 10px 0;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			`;
		} else {
			return css`
				height: 35vw;
				width: auto;
			`;
		}
	}};
	/* height: auto; */
`;

const ResaltedText = styled.span`
	font-family: 'Courgette', cursive;
	font-size: 20px;
`;

const widthMinMobile = 800;

class OverviewPage extends Component {
	state = {
		width: window.innerWidth,
		isMobile: window.innerWidth < widthMinMobile
	};

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState(prevState => {
			return {
				...prevState,
				width: window.innerWidth,
				isMobile: window.innerWidth < widthMinMobile
			};
		});
	};

	render() {
		return this.state.isMobile ? (
			<WrapperText isMobile={this.state.isMobile}>
				<Question isMobile={this.state.isMobile}>
					What is this?
				</Question>
				<ResponseImage src={brain} isMobile={this.state.isMobile} />
				<BodyText isMobile={this.state.isMobile}>
					<ResaltedText>Motor Imagery</ResaltedText> is a mental
					simulation of action, the current state of the art show us
					how classify and recognize the EEG signals related to Motor
					imagery using algorithms based on machine learning (e.g.
					Artificial Neural Networks) and with this understand or
					categorize the mental motor cognitive task emergent to the
					patient. In this article I'm going to try to use classify
					Motor Imagery EEG signals with a new Artificial Intelligence
					technique,{' '}
					<ResaltedText>
						Generative Adversary Networks (GAN).
					</ResaltedText>{' '}
					My true focus is not classify the EEG signal, but, create a
					new way to understand it (Motor Imagery behavior), create a
					model can find the correct way to classify the EEG signals.
				</BodyText>
			</WrapperText>
		) : (
			<Wrapper isMobile={this.state.isMobile}>
				<WrapperText isMobile={this.state.isMobile}>
					<Question isMobile={this.state.isMobile}>
						What is this?
					</Question>
					<BodyText isMobile={this.state.isMobile}>
						<ResaltedText>Motor Imagery</ResaltedText> is a mental
						simulation of action, the current state of the art show
						us how classify and recognize the EEG signals related to
						Motor imagery using algorithms based on machine learning
						(e.g. Artificial Neural Networks) and with this
						understand or categorize the mental motor cognitive task
						emergent to the patient. In this article I'm going to
						try to use classify Motor Imagery EEG signals with a new
						Artificial Intelligence technique,{' '}
						<ResaltedText>
							Generative Adversary Networks (GAN).{' '}
						</ResaltedText>{' '}
						My true focus is not classify the EEG signal, but,
						create a new way to understand it (Motor Imagery
						behavior), create a model can find the correct way to
						classify the EEG signals.
					</BodyText>
				</WrapperText>

				<ResponseImage src={brain} isMobile={this.state.isMobile} />
			</Wrapper>
		);
	}
}

export default OverviewPage;

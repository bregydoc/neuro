import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import logoLoading from '../assets/neuro_loader.png';

import Theme from '../metadata/theme';
const Background = styled.div`
	background-color: ${Theme.extraColor1};
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	display: flex;
	flex-flow: column;

	align-content: center;
	align-items: center;
`;

const LogoLoading = styled.img`
	height: 100px;
	width: auto;
	/* position: relative;
	top: 50%;
	transform: translateY(-50%);
	left: 50%;
	transform: translateX(-50%); */

	animation: 0.8s infinite beatHeart;

	@keyframes beatHeart {
		0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.1);
		}
		40% {
			transform: scale(1);
		}
		60% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;

const NeuroBanner = styled.div`
	font-family: 'Oswald', sans-serif;
	color: white;
	text-transform: uppercase;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 48px;
			`;
		} else {
			return css`
				font-size: 54px;
			`;
		}
	}};
`;

const MadeWithLove = styled.div`
	font-family: 'Nunito Sans', sans-serif;

	color: white;
	display: flex;
	font-weight: 300;

	${props => {
		if (props.isMobile) {
			return css`
				font-size: 14px;
			`;
		} else {
			return css`
				font-size: 18px;
			`;
		}
	}};
`;

const Heart = styled.div`
	color: #ff7b92;
	padding: 0 5px 0 5px;
`;

const Centerer = styled.div`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	flex-flow: column;

	align-content: center;
	align-items: center;
`;
class Loading extends Component {
	render() {
		const isMobile = window.innerWidth < 500;
		return (
			<Background>
				<Centerer>
					<LogoLoading src={logoLoading} />
					<NeuroBanner isMobile={isMobile}>
						{' '}
						Neuro Research
					</NeuroBanner>
					<MadeWithLove isMobile={isMobile}>
						Made with <Heart>♥</Heart> by Bregy Malpartida
					</MadeWithLove>
				</Centerer>
			</Background>
		);
	}
}

export default Loading;

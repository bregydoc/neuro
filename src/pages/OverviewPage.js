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

	color: #ffd981;
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
		{
			return this.state.isMobile ? (
				<WrapperText isMobile={this.state.isMobile}>
					<Question isMobile={this.state.isMobile}>
						What is this?
					</Question>
					<ResponseImage src={brain} isMobile={this.state.isMobile} />
					<BodyText isMobile={this.state.isMobile}>
						Can you imagine what we will be downloading in another
						twenty years? I mean who would have ever thought that
						you could record sound with digital quality fifty years
						ago? Now we routinely download whole albums worth of
						music in a couple of minutes to ipods that hold
						thousands of songs in the space the size of a zippo
						lighter!. Can you imagine what we will be downloading in
						another twenty years? I mean who would have ever thought
						that you could record sound with digital quality fifty
						years ago? Now we routinely download whole albums worth
						of music in a couple of minutes to ipods that hold
						thousands of songs in the space the size of a zippo
						lighter!
					</BodyText>
				</WrapperText>
			) : (
				<Wrapper isMobile={this.state.isMobile}>
					<WrapperText isMobile={this.state.isMobile}>
						<Question isMobile={this.state.isMobile}>
							What is this?
						</Question>
						<BodyText isMobile={this.state.isMobile}>
							Can you imagine what we will be downloading in
							another twenty years? I mean who would have ever
							thought that you could record sound with digital
							quality fifty years ago? Now we routinely download
							whole albums worth of music in a couple of minutes
							to ipods that hold thousands of songs in the space
							the size of a zippo lighter!. Can you imagine what
							we will be downloading in another twenty years? I
							mean who would have ever thought that you could
							record sound with digital quality fifty years ago?
							Now we routinely download whole albums worth of
							music in a couple of minutes to ipods that hold
							thousands of songs in the space the size of a zippo
							lighter!
						</BodyText>
					</WrapperText>

					<ResponseImage src={brain} isMobile={this.state.isMobile} />
				</Wrapper>
			);
		}
	}
}

export default OverviewPage;

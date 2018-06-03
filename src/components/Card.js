import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

import calendarIcon from '../assets/calendar.png';
import scihubIcon from '../assets/scihub.png';
import citeIcon from '../assets/cite.png';
import homeIcon from '../assets/home.png';

const Container = styled.div`
   
	
	border-radius: 4px;
	overflow-y: hidden;

    transition: 1s;
    
    box-shadow: 0 0 20px 0 rgba(79, 79, 79, 0.25);

    ${props => {
		if (props.isMobile) {
			return css`
				min-height: 25vh;
				height: auto;
				margin-top: 20px;
				margin-left: 15px;
				margin-right: 15px;

				display: flex;
			`;
		} else {
			return css`
				height: 75vh;
				width: 375px;
				min-width: 375px;
				margin-left: 10px;
				margin-right: 10px;
				margin-top: 20px;
				margin-bottom: 20px;
			`;
		}
	}};
    
	/* ${props => {
		if (props.active) {
			return css`
				box-shadow: 0 0 80px 0 rgba(79, 79, 79, 0.35);
				width: 30vw;
				height: 76vh;
				transform: translateX(-0.5vw);
				transform: translateY(-1vh);
			`;
		} else {
			return css`
				box-shadow: 0 0 20px 0 rgba(79, 79, 79, 0.25);
			`;
		}
	}}; */
    /* background: red; */
    
`;

const BackgroundCard = styled.div`
	/* height: 60%; */

	transition: 1s;

	${props => {
		if (props.isMobile) {
			return css`
				display: none;
			`;
		} else {
			return css`
				width: 100%;
				background-image: url('https://placeimg.com/380/380/nature');
			`;
		}
	}};
	${props => {
		if (props.active) {
			return css`
				height: 20%;
			`;
		} else {
			return css`
				height: 60%;
			`;
		}
	}};
`;

const BackgroundHover = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	transition: 1s;

	${props => {
		if (props.active) {
			return css`
				background-color: black;
				opacity: 0.5;
			`;
		} else {
			return css`
				background-color: transparent;
			`;
		}
	}};
`;

const InfoContainer = styled.div`
	display: flex;
	/* height: auto; */
	flex-flow: column;

	/* ${props => {
		if (props.active) {
			return css`
				height: calc(100%-20%);
			`;
		} else {
			return css`
				height: calc(100%-60%);
			`;
		}
	}}; */

	/* transition: 1s;
	:hover {
		transform: translateY(-80%);
    } */
`;

const TypeCard = styled.div`
	background: #4edbc0;
	padding: 10px 30px 10px 30px;
	max-width: 60px;
	transform: translateY(-100%);
	margin-bottom: -40px;
	font-family: 'Nunito Sans', sans-serif;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
`;

const InfoCard = styled.div`
	background-color: white;
	width: auto;
	padding-left: 10px;
	padding-right: 10px;
	padding-top: 8px;
	padding-bottom: 10px;

	height: 100%;

	display: flex;
	flex-flow: column;
	justify-content: space-between;
	flex: 1;
`;

const TitleInfo = styled.div`
	/* Classification of me: */
	font-family: 'Nunito Sans', sans-serif;
	font-size: 20px;
	font-weight: 600px;
	color: #3a3a3a;
	background-color: white;
`;

const AuthorInfo = styled.div`
	padding-top: 10px;
	font-family: 'Nunito Sans', sans-serif;
	font-weight: 300px;
	color: #3a3a3a;
	background-color: white;
	margin-bottom: 20px;
`;

const DescriptionInfo = styled.div`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 16px;
	color: #686868;

	transition: 0.8s;

	${props => {
		if (props.active) {
			return css`
				opacity: 1;
			`;
		} else {
			return css`
				opacity: 0;
				height: 0;
			`;
		}
	}};
`;

const QuestionInfo = styled.div`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 18px;
	color: #464646;
	font-weight: 800;
	transition: 0.5s;

	${props => {
		if (props.active) {
			return css`
				opacity: 1;
				margin-bottom: 10px;
			`;
		} else {
			return css`
				opacity: 0;
				margin-bottom: 0;
			`;
		}
	}};
`;

const MetadataInfo = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding-left: 15px;
	padding-right: 15px;

	transition: 1s;

	${props => {
		if (props.active) {
			// Active Mode
			return css`
				margin-top: 27%;
			`;
		} else {
			// Normal Mode
			return css`
				margin-top: auto;
			`;
		}
	}};
`;

const SmartSpacer = styled.div`
	display: flex;
	${props => {
		if (props.active) {
			// Active Mode
			return css`
				flex-flow: column;
				height: 100%;
			`;
		} else {
			// Normal Mode
			return css`
				flex-flow: column;
				height: 100%;
			`;
		}
	}};
`;

const CalendarIcon = styled.img`
	width: auto;
	height: 30px;
	margin-right: 10px;
`;

const PublicationDate = styled.div`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 18px;
	color: #6e6e6e;

	display: flex;
	align-items: center;

	/* padding-bottom: 20px; */
`;

const SciHubIcon = styled.img`
	width: auto;
	height: 20px;
	transition: 0.5s;
	cursor: pointer;
	:hover {
		filter: brightness(0);
	}
`;

const CiteIcon = styled.img`
	width: auto;
	height: 20px;
	transition: 0.5s;
	cursor: pointer;
	:hover {
		filter: brightness(0);
	}
`;

const HomeIcon = styled.img`
	width: auto;
	height: 20px;
	transition: 0.5s;
	cursor: pointer;
	:hover {
		filter: brightness(0);
	}
`;

const AccessLinks = styled.div`
	/* margin-bottom: 20px; */
	display: flex;
	min-width: 100px;
	justify-content: space-between;
	align-items: center;
`;

class Card extends Component {
	state = {
		active: false
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container
				isMobile={this.props.isMobile}
				onMouseEnter={e => {
					this.setState(s => (s.active = true));
				}}
				onMouseLeave={e => {
					this.setState(s => (s.active = false));
				}}
				active={this.state.active}
			>
				<BackgroundCard
					isMobile={this.props.isMobile}
					active={this.state.active}
				>
					<BackgroundHover active={this.state.active} />
				</BackgroundCard>

				<InfoContainer active={this.state.active}>
					<TypeCard>{this.props.type}</TypeCard>
					<InfoCard>
						<TitleInfo>{this.props.title}</TitleInfo>
						<AuthorInfo>{this.props.author}</AuthorInfo>
						<QuestionInfo active={this.state.active}>
							What they did?
						</QuestionInfo>
						<DescriptionInfo active={this.state.active}>
							{this.props.description}
						</DescriptionInfo>
						{/* <SmartSpacer active={this.state.active} /> */}
						<MetadataInfo active={this.state.active}>
							<PublicationDate>
								<CalendarIcon src={calendarIcon} />
								<span>2013</span>
							</PublicationDate>
							<AccessLinks>
								<Tooltip
									title="Go to Scihub link!"
									position="top"
									trigger="mouseenter"
									inertia={true}
								>
									<SciHubIcon src={scihubIcon} />
								</Tooltip>
								<Tooltip
									title="Copy a cite"
									position="top"
									trigger="mouseenter"
									inertia={true}
								>
									<CiteIcon src={citeIcon} />
								</Tooltip>

								<Tooltip
									title="Home website"
									position="top"
									trigger="mouseenter"
									inertia={true}
								>
									<HomeIcon src={homeIcon} />
								</Tooltip>
							</AccessLinks>
						</MetadataInfo>
					</InfoCard>
				</InfoContainer>
			</Container>
		);
	}
}

export default Card;

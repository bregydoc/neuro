import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Tooltip } from 'react-tippy';
import Modal from 'react-responsive-modal';

import Image from 'lqip-react';

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
				/* background-image: url(${props.frontImage}); */
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
	margin-top: -380px;
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

	${props => {
		if (props.active) {
			return css`
				height: 80%;
			`;
		} else {
			return css`
				height: 40%;
			`;
		}
	}};
	transition: 0.8s;
	/* 
	:hover {
		transform: translateY(-80%);
    } */
`;

const TypeCard = styled.div`
	background: #ff5e7a;
	padding: 10px 30px 10px 30px;
	max-width: 60px;
	transform: translateY(-100%);
	margin-bottom: -42px;
	font-family: 'Nunito Sans', sans-serif;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
	border-top-right-radius: 4px;
	z-index: 3;
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

	z-index: 2;
	background-color: white;
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

	transition: 0.5s;

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

const CalendarIcon = styled.img`
	width: auto;
	height: 20px;
	margin-right: 10px;
`;

const PublicationDate = styled.div`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 14px;
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

const MoreInformation = styled.div`
	padding: 10px;
	text-align: center;
	color: #1b1a40;
	font-weight: 700;
	transition: 0.7s;
	width: auto;

	font-family: 'Nunito Sans', sans-serif;

	${props => {
		if (props.active) {
			// Active Mode
			return css`
				margin-top: 30px;
				margin-bottom: -66px;
				margin-left: 20px;
				margin-right: 20px;
				border-radius: 4px;
				cursor: pointer;
			`;
		} else {
			// Normal Mode
			return css`
				display: none;
				/* margin-top: auto; */
			`;
		}
	}};
`;

const ExtraContentWrapper = styled.div`
	display: flex;
	flex-flow: column;
	margin-top: 20px;
`;
const ExtraContentTitle = styled.div`
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 28px;
`;

const ExtraContent = styled.div`
	margin-top: 15px;
	font-family: 'Nunito Sans', sans-serif;
	font-size: 16px;
	line-height: 30px;
	margin-bottom: 10px;
`;

const CardImage = styled.div`
	width: auto;
	height: 50vh;
	overflow: hidden;

	transition: 1s;

	${props => {
		if (props.active) {
			return css`
				height: 170px;
			`;
		} else {
			return css``;
		}
	}};
`;

class Card extends Component {
	state = {
		active: false,
		dialogActive: false
	};

	openDialog = e => {
		this.setState(s => {
			return { ...s, dialogActive: true, active: true };
		});
	};

	closeDialog = e => {
		this.setState(s => {
			return { ...s, dialogActive: false, active: false };
		});
	};

	render() {
		return (
			<div>
				<Modal
					open={this.state.dialogActive}
					onClose={this.closeDialog}
					center
				>
					<ExtraContentWrapper>
						<ExtraContentTitle>
							{this.props.extraInfo.title}
						</ExtraContentTitle>
						<ExtraContent>
							{this.props.extraInfo.content}
						</ExtraContent>
					</ExtraContentWrapper>
				</Modal>
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
						<CardImage active={this.state.active}>
							<Image
								src={this.props.frontImage}
								thumbnail={this.props.frontImage}
								aspectRatio={'500x500'}
								// aspectRatio={'300x370'} // could be '1024x768'
							/>
							<BackgroundHover active={this.state.active} />
						</CardImage>
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
							<MoreInformation
								active={this.state.active}
								onClick={this.openDialog}
							>
								MORE INFORMATION
							</MoreInformation>
							<MetadataInfo active={this.state.active}>
								<PublicationDate>
									<CalendarIcon src={calendarIcon} />
									<span>{this.props.year}</span>
								</PublicationDate>
								<AccessLinks>
									<Tooltip
										title="Go to Scihub link!"
										position="top"
										trigger="mouseenter"
										inertia={true}
									>
										<a href={this.props.url}>
											<SciHubIcon src={scihubIcon} />
										</a>
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
										<a href={this.props.url}>
											<HomeIcon src={homeIcon} />
										</a>
									</Tooltip>
								</AccessLinks>
							</MetadataInfo>
						</InfoCard>
					</InfoContainer>
				</Container>
			</div>
		);
	}
}

export default Card;

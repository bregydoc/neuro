import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Konami from 'react-konami-code';

import SideBar from '../components/Sidebar';

import { Switch, Route, Link } from 'react-router-dom';

import SotaPage from './SotaPage';
import OverviewPage from './OverviewPage';

import Theme from '../metadata/theme';

const MainContainer = styled.div`
	${props => {
		if (props.isMobile) {
			return css`
				width: 100vw;
				height: 100%;
				max-height: 100vh;
			`;
		} else {
			return css`
				display: grid;
				grid-template-columns: 90px 100%;
				grid-template-rows: 90px 20px 100%;
				width: calc(100vw - 90px);
				max-height: 100vh;
			`;
		}
	}};
`;

const ContentContainer = styled.div`
	${props => {
		if (props.isMobile) {
			return css`
				grid-row-start: 2;
			`;
		} else {
			return css`
				grid-row-start: 3;
				grid-column-start: 2;
				margin-left: 30px;
				overflow-x: scroll;
				overflow-y: scroll;
				/* margin-top: px; */
				max-height: calc(100vh - 105px);
			`;
		}
	}};
`;

const ContentTitle = styled.div`
	/* STATE OF THE ART 1: */
	font-family: 'Oswald', sans-serif;
	font-weight: 400;
	font-size: 21px;
	color: ${Theme.secundaryTextColor};
	text-transform: uppercase;

	grid-column-start: 2;
	grid-row-start: 2;

	${props => {
		if (props.isMobile) {
			return css`
				text-align: center;
				display: flex;
				flex-flow: column;
			`;
		} else {
			return css`
				text-align: start;
				padding-left: 32px;
				display: flex;
			`;
		}
	}};
`;

const NeuroTitle = styled.div`
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 42px;
	color: ${Theme.primaryTextColor};
	/* text-align: center; */
	margin-top: 14px;
	grid-row: 1 / 2;
	grid-column-start: 1;

	${props => {
		if (props.isMobile) {
			return css`
				display: flex;
				align-items: center;
				justify-content: space-around;
				flex-flow: column;
			`;
		} else {
			return css`
				padding-left: 30px;
			`;
		}
	}};
`;

const SelectorWrapper = styled.div`

	width: 180px;
	height: 30px;
	border-radius: 3px;
	overflow: hidden;

	background-color: ${Theme.primaryColor}
	/* text-align: center;
	vertical-align: middle; */
	cursor: pointer;
	display: flex;
	box-shadow: 0 0 15px 0 rgba(79, 79, 79, 0.15);
	margin-left: 15px;

	${props => {
		if (props.isMobile) {
			return css`
				margin-top: 15px;
			`;
		} else {
			return css``;
		}
	}};
`;

const SOTASelector = styled.select`
	padding: 3px 8px 5px 8px;
	width: 100%;
	height: 100%;
	border: none;
	box-shadow: none;
	background: transparent;
	background-image: none;
	-webkit-appearance: none;

	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: 400;
	font-size: 16px;
	color: ${Theme.primaryTextColor};
	/* color: white; */

	text-align: center;
	vertical-align: middle;

	align-content: center;
	align-items: center;

	option {
		font-size: 12px;
	}

	:focus {
		outline: none;
	}
	cursor: pointer;
`;

const ArrowIcon = styled.div`
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 11px;
	color: ${Theme.primaryTextColor};
	vertical-align: middle;
	margin-top: 6px;
	margin-right: 8px;
	cursor: pointer;
`;

const pages = {
	'/': 'About it',
	'/sota': 'State of the art',
	'/freeideas': 'Free Ideas for the future',
	'/datasets': 'Datasets',
	'/gan': 'Generative Adversial Networks'
};

class MainPage extends Component {
	constructor(props, context) {
		super(props, context);

		var sotaVer = this.props.location.pathname.split('/');
		sotaVer = sotaVer[sotaVer.length - 1];
		// console.log(sotaVer);
		this.state = {
			width: window.innerWidth,
			isMobile: window.innerWidth < 500,
			currentPage: 'State of the art',
			currentSOTASel: sotaVer
		};
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState(prevState => {
			return {
				...prevState,
				width: window.innerWidth,
				isMobile: window.innerWidth < 500
			};
		});
	};

	easterEgg = () => {
		console.log('Konami Code!');
		alert('Hey, You are a friki!');
	};

	changeSOTASelector = e => {
		const SOTAto = e.target.value;
		this.setState(s => {
			return { ...s, currentSOTASel: SOTAto };
		});
		this.props.history.push('/sota/' + e.target.value);
	};

	render() {
		const currentLocation = this.props.location.pathname;
		const noUnderLine = { textDecoration: 'none' };

		return (
			<div>
				{!this.state.isMobile ? (
					<a
						href="https://github.com/bregydoc/neuro"
						aria-label="View source on Github"
					>
						<svg
							width="80"
							height="80"
							viewBox="0 0 250 250"
							style={{
								fill: '#151513',
								color: '#fff',
								position: 'absolute',
								top: 0,
								border: 0,
								right: 0
							}}
							aria-hidden="true"
						>
							<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
							<path
								d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
								fill="currentColor"
								style={{ transformOrigin: '130px 106px' }}
							/>
							<path
								d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
								fill="currentColor"
							/>
						</svg>
					</a>
				) : null}
				<Konami action={this.easterEgg} />

				<MainContainer isMobile={this.state.isMobile}>
					<SideBar
						isMobile={this.state.isMobile}
						currentLocation={currentLocation}
					/>

					<Link to="/" style={noUnderLine}>
						<NeuroTitle isMobile={this.state.isMobile}>
							Neuro Research
						</NeuroTitle>
					</Link>
					<ContentTitle isMobile={this.state.isMobile}>
						{currentLocation.includes('/sota') ? (
							<span>{pages['/sota']}</span>
						) : (
							<span>{pages[currentLocation]}</span>
						)}

						{currentLocation.includes('/sota') ? (
							<SelectorWrapper isMobile={this.state.isMobile}>
								<SOTASelector
									value={this.state.currentSOTASel}
									onChange={this.changeSOTASelector}
								>
									<option value="v1">
										State of the art v1
									</option>
									<option value="v2">
										State of the art v2
									</option>
									<option value="v3">
										State of the art v3
									</option>
								</SOTASelector>
								<ArrowIcon> ▼</ArrowIcon>
							</SelectorWrapper>
						) : null}
					</ContentTitle>
					<ContentContainer isMobile={this.state.isMobile}>
						<Switch>
							<Route path="/" exact component={OverviewPage} />
							{/* <Route path="/sota" component={SotaPage} /> */}
							<Route path="/sota/:version" component={SotaPage} />
							<Route
								path="/freeideas"
								component={() => <h1>Hello Free</h1>}
							/>
							<Route
								path="/datasets"
								component={() => <h1>Hello Datasets</h1>}
							/>
							<Route
								path="/gan"
								component={() => <h1>Hello GAN</h1>}
							/>
						</Switch>
					</ContentContainer>
				</MainContainer>
			</div>
		);
	}
}

export default MainPage;

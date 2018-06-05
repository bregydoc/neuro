import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import SideBar from '../components/Sidebar';

import { Switch, Route } from 'react-router-dom';

import SotaPage from './SotaPage';
import OverviewPage from './OverviewPage';

const MainContainer = styled.div`
	${props => {
		if (props.isMobile) {
			return css`
				width: 100vw;
			`;
		} else {
			return css`
				display: grid;
				grid-template-columns: 90px 100%;
				grid-template-rows: 90px 100%;
				width: calc(100vw - 80px);
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
				grid-row-start: 2;
				grid-column-start: 2;
				margin-left: 30px;
				overflow-x: scroll;
			`;
		}
	}};
`;

const ContentTitle = styled.div`
	/* STATE OF THE ART 1: */
	font-family: 'Oswald', sans-serif;
	font-weight: 400;
	font-size: 21px;
	color: #686868;
	text-transform: uppercase;
`;

const NeuroTitle = styled.div`
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 42px;
	color: #323232;
	/* text-align: center; */
	margin-top: 14px;
	grid-row: 1 / 2;
	grid-column-start: 2;

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
		this.state = {
			width: window.innerWidth,
			isMobile: window.innerWidth < 500,
			currentPage: 'State of the art'
		};
	}

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
				isMobile: window.innerWidth < 500
			};
		});
	};

	render() {
		const currentLocation = this.props.location.pathname;

		return (
			<MainContainer isMobile={this.state.isMobile}>
				<SideBar
					isMobile={this.state.isMobile}
					currentLocation={currentLocation}
				/>

				<NeuroTitle isMobile={this.state.isMobile}>
					Neuro Research
					<ContentTitle>{pages[currentLocation]}</ContentTitle>
				</NeuroTitle>

				<ContentContainer isMobile={this.state.isMobile}>
					<Switch>
						<Route path="/" exact component={OverviewPage} />
						<Route path="/sota" component={SotaPage} />
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
		);
	}
}

export default MainPage;

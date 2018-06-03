import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import SideItem from './SideItem';

import logo from '../assets/logo.png';
import stateoftheartActive from '../assets/stateoftheart_a.png';
import stateoftheartNormal from '../assets/stateoftheart_n.png';
import freeideasActive from '../assets/freeideas_a.png';
import freeideasNormal from '../assets/freeideas_n.png';
import datasetsActive from '../assets/datasets_a.png';
import datasetsNormal from '../assets/datasets_n.png';
import ganActive from '../assets/gan_a.png';
import ganNormal from '../assets/gan_n.png';

import { Link } from 'react-router-dom';

const Container = styled.div`
	/* margin-right: 28px; */
	background-color: #4edbc0;

	${props => {
		if (props.isMobile) {
			return css`
				position: fixed;
				bottom: 0;
				z-index: 1;
				height: 10vh;
				width: 100vw;
				display: flex;
				justify-content: space-between;
				box-shadow: 0 -5px 19px 0 rgba(79, 79, 79, 0.25);
			`;
		} else {
			return css`
				grid-row-start: 1;
				grid-row-end: 2;
				height: 100vh;
				box-shadow: 5px 0 19px 0 rgba(79, 79, 79, 0.25);
			`;
		}
	}};
`;

const Logo = styled.img`
	/* margin: 0 auto; */
	position: relative;
	left: 50%;
	margin-top: 24px;
	transform: translateX(-50%);
	width: 60px;
	height: auto;
`;

const Spacer = styled.div`
	width: 100%;
	height: ${props => {
		return props.size * 10;
	}}px;
`;

class Sidebar extends Component {
	state = {
		selected: 'sota'
	};

	render() {
		const noUnderLine = { textDecoration: 'none' };
		if (this.props.isMobile) {
			return (
				<Container isMobile={this.props.isMobile}>
					<Link to="/sota" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="State of the art"
							normalIcon={stateoftheartNormal}
							activeIcon={stateoftheartActive}
							active={this.state.selected === 'sota'}
							onClick={() => {
								this.setState(s => (s.selected = 'sota'));
							}}
						/>
					</Link>

					<Link to="/freeideas" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="Free Ideas"
							normalIcon={freeideasNormal}
							activeIcon={freeideasActive}
							active={this.state.selected === 'free'}
							onClick={() => {
								this.setState(s => (s.selected = 'free'));
							}}
						/>
					</Link>

					<Link to="/datasets" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="Datasets"
							normalIcon={datasetsNormal}
							activeIcon={datasetsActive}
							active={this.state.selected === 'data'}
							onClick={() => {
								this.setState(s => (s.selected = 'data'));
							}}
						/>
					</Link>

					<Link to="/gan" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="GAN"
							normalIcon={ganNormal}
							activeIcon={ganActive}
							active={this.state.selected === 'gan'}
							onClick={() => {
								this.setState(s => (s.selected = 'gan'));
							}}
						/>
					</Link>
				</Container>
			);
		} else {
			return (
				<Container isMobile={this.props.isMobile}>
					<Logo src={logo} />
					<Spacer size={6} />
					<Link to="/sota" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="State of the art"
							normalIcon={stateoftheartNormal}
							activeIcon={stateoftheartActive}
							active={this.state.selected === 'sota'}
							onClick={() => {
								this.setState(s => (s.selected = 'sota'));
							}}
						/>
					</Link>

					<Link to="/freeideas" style={noUnderLine}>
						<SideItem
							title="Free Ideas"
							normalIcon={freeideasNormal}
							activeIcon={freeideasActive}
							active={this.state.selected === 'free'}
							onClick={() => {
								this.setState(s => (s.selected = 'free'));
							}}
						/>
					</Link>

					<Link to="/datasets" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="Datasets"
							normalIcon={datasetsNormal}
							activeIcon={datasetsActive}
							active={this.state.selected === 'data'}
							onClick={() => {
								this.setState(s => (s.selected = 'data'));
							}}
						/>
					</Link>

					<Link to="/gan" style={noUnderLine}>
						<SideItem
							isMobile={this.props.isMobile}
							title="GAN"
							normalIcon={ganNormal}
							activeIcon={ganActive}
							active={this.state.selected === 'gan'}
							onClick={() => {
								this.setState(s => (s.selected = 'gan'));
							}}
						/>
					</Link>
				</Container>
			);
		}
	}
}

export default Sidebar;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Title = styled.div`
	color: ${props => (props.active ? 'white' : '#323232')};

	text-transform: uppercase;
	font-size: 10px;
	font-family: 'Oswald', sans-serif;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
	align-self: center;
`;

const Container = styled.div`
	width: 100%;
	background-color: ${props => (props.active ? '#0000004F' : 'transparent')};

	text-align: center;

	align-content: center;
	vertical-align: middle;

	${props => {
		if (props.isMobile) {
			return css`
				/* padding: 0 10px 0 10px; */
				padding-top: 3px;
				height: 100%;
			`;
		} else {
			return css`
				padding: 21px 0 21px 0;
			`;
		}
	}};

	transition: 0.5s;

	:hover {
		cursor: pointer;
		background-color: ${props =>
			props.active ? '' : 'RGBA(50, 50, 50, 0.1)'};
	}
`;
const Wrapper = styled.div`
	${props => {
		if (props.isMobile) {
			return css`
				padding: 0 15px 0 15px;
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			`;
		} else {
			return css``;
		}
	}};
`;

const Icon = styled.img`
	/* position: relative;
	left: 50%;
	transform: translateX(-50%); */
	width: auto;

	${props => {
		if (props.isMobile) {
			return css`
				height: 24px;
			`;
		} else {
			return css`
				height: 30px;
			`;
		}
	}};
`;

class SideItem extends Component {
	render() {
		return (
			<Container
				active={this.props.active}
				onClick={this.props.onClick}
				isMobile={this.props.isMobile}
			>
				<Wrapper isMobile={this.props.isMobile}>
					{this.props.active ? (
						<Icon
							isMobile={this.props.isMobile}
							src={this.props.activeIcon}
						/>
					) : (
						<Icon
							isMobile={this.props.isMobile}
							src={this.props.normalIcon}
						/>
					)}

					<Title active={this.props.active}>{this.props.title}</Title>
				</Wrapper>
			</Container>
		);
	}
}

export default SideItem;

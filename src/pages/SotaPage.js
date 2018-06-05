import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Card from '../components/Card';

import papers from '../data/papers.json';
import Loading from '../components/Loading';

const Content = styled.div`
	display: flex;
	margin-top: 20px;

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

class StateOfTheArt extends Component {
	state = {
		width: window.innerWidth,
		isMobile: window.innerWidth < 500,
		papers: papers.papers,
		loading: true
	};

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	// make sure to remove the listener
	// when the component is not mounted anymore
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	componentDidMount() {
		setTimeout(
			() =>
				this.setState(prevState => {
					return { ...prevState, loading: false };
				}),
			100
		);
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
		return this.state.loading ? (
			<Loading />
		) : (
			<Content isMobile={this.state.isMobile}>
				{this.state.papers.map((paper, i) => {
					return (
						<Card
							isMobile={this.state.isMobile}
							title={paper.title}
							author={paper.authors[0]}
							description={paper.description}
							url={paper.url}
							type="paper"
							key={i}
						/>
					);
				})}
			</Content>
		);
	}
}

export default StateOfTheArt;

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Card from '../components/Card';

import papers from '../data/papers.json';

const Content = styled.div`
	display: flex;

	${props => {
		if (props.isMobile) {
			return css`
				flex-flow: column;
			`;
		} else {
			return css``;
		}
	}};
	/* width: 100%; */

	/* overflow-x: scroll; */
	/* overflow-: scroll; */
`;

class StateOfTheArt extends Component {
	state = {
		width: window.innerWidth,
		isMobile: window.innerWidth < 500,
		papers: papers.papers
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
				isMobile: window.innerWidth < 500
			};
		});
	};

	render() {
		return (
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

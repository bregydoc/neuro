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
				padding-bottom: 80px;
			`;
		} else {
			return css``;
		}
	}};
`;

const widthMinMobile = 500;

class StateOfTheArt extends Component {
	state = {
		width: window.innerWidth,
		isMobile: window.innerWidth < widthMinMobile,
		papers: papers,
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
			1000
		);
		// this.setState(prevState => {
		// 	return { ...prevState, loading: false };
		// });
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
		// console.log(this.props.location.pathname);
		var sotaVer = this.props.location.pathname.split('/');
		sotaVer = sotaVer[sotaVer.length - 1];

		const currentPapers = this.state.papers['papers_' + sotaVer];
		return this.state.loading ? (
			<Loading />
		) : (
			<Content isMobile={this.state.isMobile}>
				{currentPapers.map((paper, i) => {
					return (
						<Card
							isMobile={this.state.isMobile}
							title={paper.title}
							author={paper.authors[0]}
							description={paper.description}
							year={paper.year}
							url={paper.url}
							type="paper"
							frontImage={paper.front_image}
							extraInfo={paper.extra_information}
							key={i}
						/>
					);
				})}
			</Content>
		);
	}
}

export default StateOfTheArt;

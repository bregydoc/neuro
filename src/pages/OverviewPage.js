import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from '../p5js/abstractgen';

class OverviewPage extends Component {
	state = {
		r: 0
	};

	render() {
		return (
			<div>
				<h1
					onClick={this.setState(s => {
						r: s.r++;
					})}
				>
					Hello World, I'm Neuro Research
				</h1>
				<P5Wrapper sketch={sketch} rotation={this.state.r} />
			</div>
		);
	}
}

export default OverviewPage;

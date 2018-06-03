import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	background-color: #323232;
	width: 100vw;
	height: 100vh;
`;

class Loading extends Component {
	render() {
		return <Background />;
	}
}

export default Loading;

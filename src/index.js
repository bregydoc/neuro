import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/" component={MainPage} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

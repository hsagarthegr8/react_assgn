import React, { Component } from 'react';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className='App'>
				{this.props.isLoggedIn ?
					(
						<figure>
							<img src='/img/user.png' alt='This is user' />
							<figcaption> This is User </figcaption>
						</figure>
					)
					:
					(
						<figure>
							<img src='/img/guest.png' alt='This is guest' />
							<figcaption> This is Guest </figcaption>
						</figure>
					)}
			</div>
		)
	}

}
export default App;

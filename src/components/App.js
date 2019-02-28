import React, { Component } from 'react';
import SoundReading from './SoundReading';

class App extends Component {
	state = { sound: 'm', audio: null }

	

	render() {
		console.log(this.state.sound)
		return (
			<SoundReading letter={this.state.sound} sound={this.onHoverOver} />
		);
	}
}

export default App;
import React, { Component } from 'react';
import SoundData from './sounds.json';
import SoundReading from './SoundReading';

class App extends Component {
	state = { sound: SoundData.a.a, audio: SoundData.a.audio }

	onHoverOver = () => {
		let audioSound = new Audio(this.state.audio);
		return audioSound.play();
	}

	render() {
		return (
			<SoundReading 
				letter={this.state.sound}
				audio={this.onHoverOver}

			/>
		);
	}
}

export default App;
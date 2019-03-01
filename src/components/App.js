import React, { Component } from 'react';
import soundData from './sounds.json';
import SoundReading from './SoundReading';

class App extends Component {
	state = { sound: 'a', audio: './audio/a-sound.m4a' }



	render() {
		return (
			<SoundReading 
				letter={this.state.sound}
				audio={this.state.audio}

			/>
		);
	}
}

export default App;
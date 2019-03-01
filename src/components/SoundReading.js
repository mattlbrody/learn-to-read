import './css/SoundReading.css';
import React, { Component } from 'react';
import SoundData from './sounds.json';
import Activities from './activities.json';

	class SoundReading extends Component {
		state = { 
			activity: Activities.activities[0],
			sound: SoundData.sounds[0].letter, 
			audio: SoundData.sounds[0].audio, 
			index: 0, 
			arrLength: SoundData.sounds.length 
		}

		onHoverOver = () => {
		let audioSound = new Audio(this.state.audio);
		return audioSound.play();
		}

		nextSound = () => {
			if (this.state.arrLength > 1) {
			this.setState({ 
				activity: Activities.activities[this.state.index + 1],
				sound: SoundData.sounds[this.state.index + 1].letter, 
				audio: SoundData.sounds[this.state.index + 1].audio, 
				index: this.state.index + 1, 
				arrLength: this.state.arrLength - 1 
			})
			} else {
				this.setState({ sound: 'Done!', audio: null, index: 0 })
			}
		}


		render() {
			console.log(this.state.activity.length)
			if(this.state.activity.length === 2) {
				return (
					<div className="ui raised very padded text container segment twoletters">
						<h1 className="soundLettersOut">{this.state.activity}</h1>
						<div className="ui seven column grid">
							<div className="leftcircle"></div>
							<div className="left"></div>
							<div onMouseEnter={this.onHoverOver} className="middlecircle">
								<audio id="myAudio">
							 	<source src="horse.mp3" type="audio/mpeg" />
								</audio>
							</div>
							<div className="middle"></div>
							<div onMouseEnter={this.onHoverOver} className="middlecircle">
								<audio id="myAudio">
							 	<source src="horse.mp3" type="audio/mpeg" />
								</audio>
							</div>
							<div className="right"></div>
							<div className="arrow-right"></div>
						</div>
						<button onClick={this.nextSound} className="ui primary button">Next Sound</button>
					</div>
				);
			} else if (this.state.activity.length === 1){
				return (
					<div className="ui raised very padded text container segment oneletter">
						<h1>{this.state.activity}</h1>
						<div className="ui five column grid">
							<div className="leftcircle"></div>
							<div className="left"></div>
							<div onMouseEnter={this.onHoverOver} className="middlecircle">
								<audio id="myAudio">
							 	<source src="horse.mp3" type="audio/mpeg" />
								</audio>
							</div>
							<div className="right"></div>
							<div className="arrow-right"></div>
						</div>
						<button onClick={this.nextSound} className="ui primary button">Next Sound</button>
					</div>
				);
			} else {
				return <div>complete</div>
			}
		}
	}

export default SoundReading;
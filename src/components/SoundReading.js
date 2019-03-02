import './css/SoundReading.css';
import React, { Component } from 'react';
import SoundData from './sounds.json';

	class SoundReading extends Component {
		state = { 
			data: SoundData.sounds,
			index: 0
		}

		onHoverOver0 = () => {
		let audioSound = new Audio(this.state.data[this.state.index].audio0);
		return audioSound.play();
		}

		onHoverOver1 = () => {
		let audioSound = new Audio(this.state.data[this.state.index].audio1);
		return audioSound.play();
		}

		nextSound = () => {
			this.setState({ index: (this.state.index + 1) });
		};


		render() {
			if(Object.keys(this.state.data[this.state.index]).length === 4) {
				return (
					<div className="ui raised very padded text container segment twoletters">
						<h1 className="soundLettersOut twoLetter">{this.state.data[this.state.index].letter0}</h1>
						<h1 className="soundLettersOut twoLetter">{this.state.data[this.state.index].letter1}</h1>
						<div className="ui seven column grid">
							<div className="leftcircle"></div>
							<div className="left"></div>
							<div onMouseEnter={this.onHoverOver0} className="middlecircle">
								<audio id="myAudio">
							 	<source src="horse.mp3" type="audio/mpeg" />
								</audio>
							</div>
							<div className="middle"></div>
							<div onMouseEnter={this.onHoverOver1} className="middlecircle">
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
			} else if (Object.keys(this.state.data[this.state.index]).length === 2){
				return (
					<div className="ui raised very padded text container segment oneletter">
						<h1 className="soundLettersOut">{this.state.data[this.state.index].letter0}</h1>
						<div className="ui five column grid">
							<div className="leftcircle"></div>
							<div className="left"></div>
							<div onMouseEnter={this.onHoverOver0} className="middlecircle">
								<audio id="myAudio">
							 	<source src={this.state.data[this.state.index].audio0} type="audio/mpeg" />
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
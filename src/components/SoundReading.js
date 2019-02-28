import './css/SoundReading.css';
import soundFile from './audio/m-sound.m4a';
import React from 'react';

const SoundReading = ({letter, onHoverOver}) => {

	onHoverOver = (state) => {
		let audio = new Audio(soundFile);
		return audio.play();
	}

	return (
		<div className="ui raised very padded text container segment">
			<h1>{letter}</h1>
			<div className="ui five column grid">
				<div className="leftcircle"></div>
				<div className="left"></div>
				<div onMouseEnter={onHoverOver} className="middlecircle">
					<audio id="myAudio">
				 	<source src="horse.mp3" type="audio/mpeg" />
					</audio>
				</div>
				<div className="right"></div>
				<div className="arrow-right"></div>
			</div>
		</div>
	);
}

export default SoundReading;
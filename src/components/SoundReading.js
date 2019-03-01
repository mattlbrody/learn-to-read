import './css/SoundReading.css';
import soundData from './sounds.json';
import soundFileM from './audio/m-sound.m4a';
import soundFileA from './audio/a-sound.m4a';
import React from 'react';

const SoundReading = ({letter, audio, onHoverOver}) => {
	console.log(soundData.a.a)
	console.log(audio)
	onHoverOver = () => {
		let audioSound = new Audio(soundFileA);
		console.log(audio)
		return audioSound.play();
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
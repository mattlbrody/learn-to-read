import './css/SoundReading.css';
import soundData from './sounds.json';
import React from 'react';

const SoundReading = ({letter, audio}) => {

	return (
		<div className="ui raised very padded text container segment">
			<h1>{letter}</h1>
			<div className="ui five column grid">
				<div className="leftcircle"></div>
				<div className="left"></div>
				<div onMouseEnter={audio} className="middlecircle">
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
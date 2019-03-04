import './css/ChooseTheLetter.css';
import React, { Component } from 'react';
import Activity from './choose.json';

class ChooseTheLetter extends Component {
	state = { 
		activity: Activity.quiz,
		response: null,
		index: 0
	}

	rightAnswerSubmitted = () => {
		this.setState({ response: 'correct', index: (this.state.index + 1) })
	}

	wrongAnswerSubmitted = () => {
		this.setState({ response: 'incorrect' })
	}

	playSound = () => {
		let audioSound = new Audio(this.state.activity[this.state.index].audio0);
		return audioSound.play();
	}


	render() {
		this.playSound();
		if (this.state.activity[this.state.index].letter0 === this.state.activity[this.state.index].answer) {
			return (
				<div className="ui raised very padded text container">
					<h2>{this.state.response}</h2>
					<div className="ui placeholder segment">
					  <div className="ui two column very relaxed stackable grid">
					    <div className="column">
					      <div className="ui form">
					      	<h1>{this.state.activity[this.state.index].letter0}</h1>
					        <button onClick={this.rightAnswerSubmitted} className="ui primary button"><i className="icon check"></i></button>
					      </div>
					    </div>
					    <div className="middle aligned column">
					      	<h1>{this.state.activity[this.state.index].letter1}</h1>
					        <button onClick={this.wrongAnswerSubmitted} className="ui primary button"><i className="icon check"></i></button>
					    </div>
					  </div>
					  <div className="ui vertical divider">
					    Or
					  </div>
					</div>
					<h2>Play the sound</h2>
					<button onClick={this.playSound} className="ui positive button"><i className="icon play"></i></button>
				</div>
			)
		} else {
			return (
				<div className="ui raised very padded text container">
					<h2>{this.state.response}</h2>
					<div className="ui placeholder segment">
					  <div className="ui two column very relaxed stackable grid">
					    <div className="column">
					      <div className="ui form">
					      	<h1>{this.state.activity[this.state.index].letter0}</h1>
					        <button onClick={this.wrongAnswerSubmitted} className="ui primary button"><i className="icon check"></i></button>
					      </div>
					    </div>
					    <div className="middle aligned column">
					      	<h1>{this.state.activity[this.state.index].letter1}</h1>
					        <button onClick={this.rightAnswerSubmitted} className="ui primary button"><i className="icon check"></i></button>
					    </div>
					  </div>
					  <div className="ui vertical divider">
					    Or
					  </div>
					</div>
					<h2>Play the sound</h2>
					<button onClick={this.playSound} className="ui positive button"><i className="icon play"></i></button>
				</div>
			);
		}
	}
}

export default ChooseTheLetter;
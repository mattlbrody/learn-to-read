import './css/DragAndDrop.css';
import React, { Component } from 'react';
import DropAnswers from './draganddrop.json';

export default class DragAndDrop extends Component {
	state = ({ 
		data: DropAnswers.quiz,
		index: 0,
		correctAnswers: 0
	})

	// Play the audio when a button is clicked
	playSound = () => {
		let audioSound0 = new Audio(this.state.data[this.state.index].answerAudio0);
		let audioSound1 = new Audio(this.state.data[this.state.index].answerAudio1);
		// play the second audio file once the first audio file is done playing
		audioSound0.addEventListener('ended', function() {
			audioSound1.play();
		})
		audioSound0.play();
	}

	// play the initial sound on page load once
	componentDidMount() {
		this.playSound();
	}

	// call this to prevent the browser from opening a link on drop
	allowDrop(ev) {
	  ev.preventDefault();
	}

	drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	}

	drop = (ev) => {
	  ev.preventDefault();
	  // gets id of the element being dropped
	  var data = ev.dataTransfer.getData("text");

	  // check what was dragged against the drop point first, then check to see if the letter matches the answer, 
	  //if it does update the correct answers and tries and append it inside of the div
	  if(ev.target.id === 'drop0' && data === 'letter0' ) {
	  	if(this.state.data[this.state.index].letter0 === this.state.data[this.state.index].answer0) {
			this.setState({ correctAnswers: this.state.correctAnswers + 1}, function (){
				if(this.state.correctAnswers === 2) {
					this.setState({ index: (this.state.index + 1) })
				}
			})
	  		ev.target.appendChild(document.getElementById(data));
	  		console.log(this.state.correctAnswers)
	  	}
	  } else if(ev.target.id === 'drop0' && data === 'letter1' ) {
	  	if(this.state.data[this.state.index].letter1 === this.state.data[this.state.index].answer0) {
	  		this.setState((state, props) => ({
			  correctAnswers: (state.correctAnswers + 1)
			}));
	  		ev.target.appendChild(document.getElementById(data));
	  		console.log(this.state.correctAnswers)
	  	}
	  } else if( ev.target.id === 'drop1' && data === 'letter0' ) {
	  	if(this.state.data[this.state.index].letter0 === this.state.data[this.state.index].answer1) {
	  		this.setState((state, props) => ({
			  correctAnswers: (state.correctAnswers + 1)
			}));
	  		ev.target.appendChild(document.getElementById(data));
	  		console.log(this.state.correctAnswers)
	  	}
	  } else if( ev.target.id === 'drop1' && data === 'letter1' ) {
	  	if(this.state.data[this.state.index].letter1 === this.state.data[this.state.index].answer1) {
	  		this.setState((state, props) => ({
			  correctAnswers: (state.correctAnswers + 1)
			}));
	  		ev.target.appendChild(document.getElementById(data));
	  		console.log(this.state.correctAnswers)
	  	}
	  }
	}



	render() {
		console.log(this.state.correctAnswers)
		return (
			<div>
				<div className="ui segment raised very padded text container">
				  <h2 className="ui header">Spell the word</h2>
				  <div className="ui clearing divider"></div>
				  <div className="ui segment">
					  <div className="ui two column very relaxed grid">
					    <div id="div0" onDrop={this.drop} onDragOver={this.allowDrop} className="column">
					      <div id="drop0" />
					    </div>
					    <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="column">
					      <div id="drop1" />
					    </div>
					  </div>
					  <div className="ui vertical divider">
					  </div>
					</div>
				  	<div className="ui segment">
					  <div className="ui two column very relaxed grid">
					    <div className="column">
					      <h1 id="letter0" draggable onDragStart={this.drag}>{this.state.data[this.state.index].letter0}</h1>
					    </div>
					    <div className="column">
					      <h1 id="letter1" draggable onDragStart={this.drag}>{this.state.data[this.state.index].letter1}</h1>
					    </div>
					  </div>
					  <div className="ui vertical divider">
					  </div>
					</div>
					<button onClick={this.playSound} className="ui positive button"><i className="icon play"></i></button>
				</div>
			</div>
		);
	} 
}

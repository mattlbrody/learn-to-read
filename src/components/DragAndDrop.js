import './css/DragAndDrop.css';
import React, { Component } from 'react';
import DropAnswers from './draganddrop.json';

export default class DragAndDrop extends Component {
	state = ({ 
		data: DropAnswers.quiz,
		index: 0,
		field1: '?',
		field2: '?'
	})

	// call this to prevent the browser from opening a link on drop
	allowDrop(ev) {
	  ev.preventDefault();
	}

	drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  console.log('dragged')
	}

	drop(ev) {
	  ev.preventDefault();
	  // gets id of the element being dropped
	  var data = ev.dataTransfer.getData("text");
	  // append the dragged element into the drop element
	  ev.target.appendChild(document.getElementById(data));
	  console.log(ev.target.id)
	  console.log(data)
	}

	playSound = () => {
		let audioSound0 = new Audio(this.state.data[this.state.index].audio0);
		let audioSound1 = new Audio(this.state.data[this.state.index].audio1);
		audioSound0.addEventListener('ended', function() {
			audioSound1.play();
		})
		audioSound0.play();
	}

	playSounds = () => {

	}


	render() {
		this.playSound();
		return (
			<div>
				<div className="ui segment raised very padded text container">
				  <h2 className="ui header">Spell the word</h2>
				  <div className="ui clearing divider"></div>
				  <div className="ui segment">
					  <div className="ui two column very relaxed grid">
					    <div id="div0" onDrop={this.drop} onDragOver={this.allowDrop} className="column">
					      <h1 id="drop0">?</h1>
					    </div>
					    <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="column">
					      <h1 id="drop1">?</h1>
					    </div>
					  </div>
					  <div className="ui vertical divider">
					  </div>
					</div>
				  	<div className="ui segment">
					  <div className="ui two column very relaxed grid">
					    <div className="column">
					      <h1 id="drag0" draggable onDragStart={this.drag}>{this.state.data[this.state.index].letter0}</h1>
					    </div>
					    <div className="column">
					      <h1 id="drag1" draggable onDragStart={this.drag}>{this.state.data[this.state.index].letter1}</h1>
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

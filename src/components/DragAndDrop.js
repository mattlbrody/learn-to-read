import './css/DragAndDrop.css';
import React, { Component } from 'react';

export default class DragAndDrop extends Component {
	allowDrop(ev) {
	  ev.preventDefault();
	}

	drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	  console.log('dragged')
	}

	drop(ev) {
	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("text");
	  ev.target.appendChild(document.getElementById(data));
	  console.log('dropped')
	}

	render() {
		return (
			<div className="container-drag">
				<p>Drag the W3Schools image into the rectangle:</p>
				<div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
				<br />
				<h2 id="drag1" draggable onDragStart={this.drag}>hello</h2>
			</div>
		);
	} 
}

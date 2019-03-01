import './css/ChooseTheLetter.css';
import React, { Component } from 'react';

class ChooseTheLetter extends Component {
	render() {
		return (
			<div className="ui raised very padded text container">
			<div className="ui placeholder segment">
			  <div className="ui two column very relaxed stackable grid">
			    <div className="column">
			      <div className="ui form">
			      	<h1>a</h1>
			        <button class="ui primary button"><i className="icon check"></i></button>
			      </div>
			    </div>
			    <div className="middle aligned column">
			      	<h1>m</h1>
			        <button class="ui primary button"><i className="icon check"></i></button>
			    </div>
			  </div>
			  <div className="ui vertical divider">
			    Or
			  </div>
			</div>
		</div>
		);
	}
}

export default ChooseTheLetter;
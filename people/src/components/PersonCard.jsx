// import React, { Component } from "react";
import React from "react";
import "./PersonCard.css";

const PersonCard = (props) => {
	let { firstName, lastName, age, hairColor } = props;
	return (
		<div className='PersonCard'>
			<h2>
				{lastName}, {firstName}
			</h2>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
		</div>
	);
};

// class PersonCard extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			age: this.props.age,
// 		};
// 	}
// 	render() {
// 		const { firstName, lastName, hairColor } = this.props;
// 		return (
// 			<div className='PersonCard'>
// 				<h2>
// 					{lastName}, {firstName}
// 				</h2>
// 				<p>Age: {this.state.age}</p>
// 				<p>Hair Color: {hairColor}</p>
// 				<button onClick={this.incrementAge}>
// 					Birthday Button for {firstName} {lastName}
// 				</button>
// 			</div>
// 		);
// 	}
// 	incrementAge = () => {
// 		this.setState({ age: this.state.age + 1 });
// 	};
// }

export default PersonCard;

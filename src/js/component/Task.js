import React, { Component } from "react";
import PropTypes from "prop-types";

import lista from "../sample/lista.json";
import "../../styles/index.scss";

class Task extends Component {
	styleCompleted() {
		return {
			fontSize: "20px",
			color: this.props.objeto1.done ? "gray" : "black",
			textDecoration: this.props.objeto1.done ? "line-through" : "none"
		};
	}

	render() {
		const { objeto1 } = this.props;
		return (
			<p style={this.styleCompleted()}>
				{objeto1.title}-{objeto1.description}-{objeto1.done}-
				{objeto1.id}
				<input
					type="checkbox"
					onChange={this.props.checkDone.bind(this, objeto1.id)}
				/>
				<button
					style={btnDelete}
					onClick={this.props.deleteTask.bind(this, objeto1.id)}>
					x
				</button>
			</p>
		);
	}
}
const btnDelete = {
	fontSize: "18px",
	background: "#ea2027",
	color: "#fff",
	border: "none",
	padding: "10px 15px",
	borderRadius: "50%",
	cursor: "pointer"
};

export default Task;

Task.propTypes = {
	objeto1: PropTypes.any,
	deleteTask: PropTypes.any,
	checkDone: PropTypes.any
};

import React, { Component } from "react";
import PropTypes from "prop-types";

import lista from "../sample/lista.json";
import "../../styles/index.scss";
class TasksForm extends Component {
	state = {
		title: "",
		description: ""
	};

	onsubmit = e => {
		this.props.addToTask(this.state.title, this.state.description);
		e.preventDefault();
	};
	onchange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.onsubmit}>
				<input
					type="text"
					placeholder="write a task"
					onChange={this.onchange}
					value={this.state.title}
					name="title"
				/>
				<br />
				<textarea
					placeholder="write a description"
					onChange={this.onchange}
					value={this.state.description}
					name="description"
				/>
				<input type="submit" />
			</form>
		);
	}
}

export default TasksForm;

TasksForm.propTypes = {
	addToTask: PropTypes.any
	// onDeleteClicked: PropTypes.any,
	// counter: PropTypes.any
};

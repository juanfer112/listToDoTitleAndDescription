import React, { Component } from "react";
import PropTypes from "prop-types";

import lista from "../sample/lista.json";
import Tasks from "./Tasks";
import TasksForm from "./TaskForm";

class App extends Component {
	state = {
		task: lista
	};
	addToTask = (title, description) => {
		const newTask = {
			title: title,
			description: description,
			id: this.state.task.length
		};

		this.setState({
			// task: [...this.state.task, newTask]
			task: this.state.task.concat(newTask)
		});
	};
	deleteTask = id => {
		const newTask = this.state.task.filter(element => element.id !== id);
		this.setState({ task: newTask });
	};

	checkDone = id => {
		const checkElement = this.state.task.map(element => {
			if (element.id == id) {
				element.done = !element.done;
			}
			return element;
		});
		this.setState({
			task: checkElement
		});
	};

	render() {
		return (
			<div>
				<TasksForm addToTask={this.addToTask} />
				<Tasks
					objeto={this.state.task}
					deleteTask={this.deleteTask}
					checkDone={this.checkDone}
				/>
			</div>
		);
	}
}
export default App;

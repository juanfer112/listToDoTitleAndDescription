import React, { Component } from "react";
import PropTypes from "prop-types";

import lista from "../sample/lista.json";
import Task from "./Task";
class Tasks extends Component {
	render() {
		return this.props.objeto.map(e => (
			<Task
				objeto1={e}
				key={e.id}
				deleteTask={this.props.deleteTask}
				checkDone={this.props.checkDone}
			/>
		));
	}
}

export default Tasks;

Tasks.propTypes = {
	objeto: PropTypes.any,
	deleteTask: PropTypes.any,
	checkDone: PropTypes.any
};

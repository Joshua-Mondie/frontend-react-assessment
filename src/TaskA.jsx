/** @format */

import { useState } from "react";

const TaskList = () => {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Buy groceries", completed: false },
		{ id: 2, text: "Attend meeting", completed: false },
		{ id: 3, text: "Complete project", completed: false },
	]);

	const handleCheckboxChange = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div>
			<h2>Task List</h2>
			<ul style={{ borderWidth: 2 }}>
				{tasks.map((task) => (
					<li key={task.id} style={{ listStyle: "none" }}>
						<label>
							<input
								type="checkbox"
								checked={task.completed}
								onChange={() => handleCheckboxChange(task.id)}
							/>
							<span
								style={{
									textDecoration: task.completed ? "line-through" : "none",
									color: task.completed ? "gray" : "black",
								}}
							>
								{task.text}
							</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;

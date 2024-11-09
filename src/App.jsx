/** @format */

import TaskList from "./TaskA";
import UserForm from "./TaskB";

const App = () => (
	<div
		style={{
			padding: "20px",
			display: "flex",
			justifyContent: "center",
			gap: 42,
		}}
	>
		<TaskList />
		<UserForm />
	</div>
);

export default App;

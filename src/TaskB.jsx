/** @format */

import { useState } from "react";

const UserForm = () => {
	const [formData, setFormData] = useState({ name: "", age: "" });
	const [submittedData, setSubmittedData] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmittedData(formData);
	};

	return (
		<div>
			<h2>User Form</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Age:
						<input
							type="number"
							name="age"
							value={formData.age}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>

			{submittedData && (
				<div>
					<h3>Submitted Data</h3>
					<p>Name: {submittedData.name}</p>
					<p>Age: {submittedData.age}</p>
				</div>
			)}
		</div>
	);
};

export default UserForm;

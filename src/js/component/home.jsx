import React from "react";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{ title: "Wash Car", id: "1", done: false },
				{ title: "Walk Dog", id: "2", done: false },
				{ title: "Buy Bread", id: "3", done: false }
			]
		};

		this.setState({
			todos: this.state.todos.concat([
				{
					title: this.state.taskInput,
					done: false,
					id: Math.floor(Math.random() * 1001)
				}
			])
		});
	}

	render() {
		let ListItems = this.state.todos.map(item => {
			return (
				<li className="listItem" key={item.id}>
					{item.title}
				</li>
			);
		});

		return (
			<div className="card">
				<div className="input">
					<form>
						<label>
							<input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<ul>{ListItems}</ul>
			</div>
		);
	}
}

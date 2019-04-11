import React from "react";
import Button from "react-bootstrap";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.updateState = this.updateState.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

		this.state = {
			todos: [
				{ title: "Wash Car", id: "1", done: false },
				{ title: "Walk Dog", id: "2", done: false },
				{ title: "Buy Bread", id: "3", done: false }
			]
		};
	}

	updateState(e) {
		this.setState({
			todos: this.state.todos.concat([
				{
					title: e,
					done: false,
					id: Math.floor(Math.random() * 1001)
				}
			])
		});
		this.preventDefault();
		document.querySelector(".placeholder").value = "";
	}

	deleteItem(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id != id)
		});
	}

	render() {
		let ListItems = this.state.todos.map(item => {
			return (
				<li className="listItem" key={item.id}>
					{item.title}
					<input
						className="xButton"
						onClick={() => this.deleteItem(item.id)}
						type="button"
						value="X"
					/>
				</li>
			);
		});

		return (
			<div className="card">
				<div className="input">
					<form>
						<label>
							<input
								id="placeholder"
								className="field"
								type="text"
								name="taskInput"
								value={this.state.value}
							/>
						</label>

						<input
							onClick={() =>
								this.updateState(
									document.querySelector("[name= taskInput]")
										.value
								)
							}
							type="button"
							value="Submit"
						/>
					</form>
				</div>
				<ul>{ListItems}</ul>
			</div>
		);
	}
}

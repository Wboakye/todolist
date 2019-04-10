import React from "react";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor() {
		super();

		this.onClickPreventDefault = this.onClickPreventDefault.bind(this);
		this.updateState = this.updateState.bind(this);

		this.state = {
			todos: [
				{ title: "Wash Car", id: "1", done: false },
				{ title: "Walk Dog", id: "2", done: false },
				{ title: "Buy Bread", id: "3", done: false }
			]
		};
	}
	/*updateState() {
		let input = document.querySelector(".field");
		let newState = [this.state.todos];
		newState.concat([
			{
				title: input,
				done: false,
				id: Math.floor(Math.random() * 1001)
			}
		]);
	}*/

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
		document.getElementById("placeholder").value = "";
	}

	onClickPreventDefault(e) {
		e.preventDefault();
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

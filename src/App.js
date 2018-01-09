import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			listItems: [],
			newItem: ''
		};
		this.handleItemInput = this.handleItemInput.bind(this);
		this.addNewItem = this.addNewItem.bind(this);

		// this.strikethrough();
	}

	addNewItem(event) {
		event.preventDefault();
		const item = this.state.newItem;
		const listItems = this.state.listItems;

		// item.addEventListener("click", function() {
		// 	item.setProperty("text-decoration", "line-through");
		// })

		listItems.push(item);
		this.setState({
			newItem: '',
			listItems: listItems,
		});
	}

	handleItemInput(event) {
		this.setState({
			newItem: event.target.value
		});
	}

	strikethrough() {
		this.setProperty("text-decoration", "line-through");
		// for (let i = 0; i < this.state.listItems.length; i++) {
		// 	this.state.listItems[i].addEventListener('click', function(event) {
		// 		this.setProperty("text-decoration", "line-through");
		// 	});
		// }
	}

	render() {
		return (
			<div>
				<h2>Todo App</h2>
				{this.state.listItems.map((item) => <div>{item}</div>)}
				<form onSubmit={this.addNewItem}>
					<input type="text" onChange={this.handleItemInput} placeholder="Add a new item!" value={this.state.newItem}/>
				</form>
			</div>
		);
	}
}

export default App;

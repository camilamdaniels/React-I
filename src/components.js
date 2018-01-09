import React, { Component } from 'react';

class Components extends Component {
	constructor() {
		super();

		this.state = {
			listItems: ['blah', 'red'],
			newItem: ''
		};
	}

	addNewItem(event) {
		event.preventDefault();
		const listItems = this.state.listItems;
		listItems.push(this.state.newItem);
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

	render() {
		return (
			<div>
				{this.state.listItems.map(item => <div>{item}</div>)}
				<form>
					<input type="text" onChange={this.handleItemInput} placeholder="Add a new item!" value={this.state.newItem}/>
				</form>
			</div>
		);
	}
}

export default Components;
import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class ShoppingForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			type:"",
			count:0,
			price:0
		}
	}
	
	onChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		}) 
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		if(!this.state.type) {
			return;
		}
		let item = {
			...this.state
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			count:0,
			price:0
		})
	}
	
	render() {
		return(
		<div style={
			{width:500,
			margin:"auto",
			backgroundColor:"lightblue"}
			}>
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="type">Name:</label>
					<input type="text"
							name="type"
							onChange={this.onChange}
							value={this.state.type}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="aineet">Aineet:</label>
					<input type="text"
							name="aineet"
							onChange={this.onChange}
							value={this.state.aineet}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="ohje">Ohje:</label>
					<input type="text"
							name="ohje"
							onChange={this.onChange}
							value={this.state.ohje}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="keyword">Keywords:</label>
					<input type="text"
							name="keyword"
							onChange={this.onChange}
							value={this.state.keyword}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="price">Price:</label>
					<input type="number"
							name="price"
							step="0.01"
							onChange={this.onChange}
							value={this.state.price}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
		</div>
		)
	}
}
import React, {Component} from 'react';

// Bootstrap for react
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';


class Note extends Component {
constructor(props) {
	super(props);

	// Setting up state
	this.state = {
	userInput : "",
	list:[]
	}
}

// Set a user input value
updateInput(value){
	this.setState({
	userInput: value,
	});
}

// Add item if user input in not empty
addItem(){
	if(this.state.userInput !== '' ){
	const userInput = {

		// Add a random id which is used to delete
		id : Math.random(),

		// Add a user value to list
		value : this.state.userInput
	};

	// Update list
	const list = [...this.state.list];
	list.push(userInput);

	// reset state
	this.setState({
		list,
		userInput:""
	});
	}
}

// Function to delete item from list use id to delete
deleteItem(key){
	const list = [...this.state.list];

	// Filter values and leave value which we need to delete
	const updateList = list.filter(item => item.id !== key);

	// Update list in state
	this.setState({
	list:updateList,
	});

}

render(){
	return(<Container className="card">
		<Row>
		<Col>
		<InputGroup>
		<FormControl
            className="form-control"
			placeholder="Add item . . . "
			size="lg"
			value = {this.state.userInput}
			onChange = {item => this.updateInput(item.target.value)}
			aria-label="add something"
			aria-describedby="basic-addon2"
		/>
		<InputGroup.Append>
			<Button
            className="btn btn-light"
			size="lg"
			onClick = {()=>this.addItem()}
			>
			ADD
			</Button>
		</InputGroup.Append>
		</InputGroup>

	</Col>
</Row>
<Row>
	<Col>
		<ListGroup>
		
		{this.state.list.map(item => {return(

			<ListGroup.Item variant="dark" 
            className='del'
            action
			onClick = { () => this.deleteItem(item.id) }>
			{item.value}
			</ListGroup.Item>

		)})}
		</ListGroup>
	</Col>
</Row>
	</Container>
	);
}
}

export default Note;


import React, { Component } from 'react';

class Form extends Component {
	state={
		firstname:"",
		lastname:"",
		email:"",
		message:"",
	};
	magicHandler=(e)=>{
		this.setState({
			[e.target.name]:e.target.value,
		})
	};
	render(){
		return (
			<div>
				<p>Firstname</p>
				<input type="text"name="firstname" onChange={this.magicHandler}/>
				<p>Lastname</p>
				<input type="text" name="lastname" onChange={this.magicHandler}/>
				<p>Email</p>		
				<input type="email" name ="email" onChange={this.magicHandler}/>
				<p>Message me</p>
				<input type="message" name ="message" onChange={this.magicHandler}/>
				<p>Firstname:{this.state.firstname}</p>	
				<p>Lastname:{this.state.lastname}</p>	
				<p>Email:{this.state.email}</p>	
				<p>Message me:{this.state.message}</p>		
			</div>
		);
	}
}

export default Form;
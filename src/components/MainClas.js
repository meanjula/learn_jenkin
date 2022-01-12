import React,{ Component } from "react";
import Box from "./Box";

class MainClas extends Component{
	state={
		persons:[
			// use id for identifying items as it is unique for each item
			{id:1, name:'Anjula', age:32, title:'Developer', love:'plants and coding'},
		    {id:2, name:'Mary', age:32, title:'CEO',love:'swimming'},
		    {id:3, name:'Sophia', age:32, title:'Designer',love:'cycling'},
		]}
		changeNameHandler=()=>{
			console.log('WOOW')
		}
	render(){
		return(
			< >
			<main>
			{/* <Box 
			name={this.state.persons[0].name} 
			age={this.state.persons[0].age} 
			title={this.state.persons[0].title}
			love={this.state.persons[0].love}
			/>
			<Box 
			name={this.state.persons[1].name} 
			age={this.state.persons[1].age} 
			title={this.state.persons[1].title}
			love={this.state.persons[1].love}
			/>
			<Box 
			name={this.state.persons[2].name} 
			age={this.state.persons[2].age} 
			title={this.state.persons[2].title}
			love={this.state.persons[2].love}
			/>	 */}
			  {this.state.persons.map(person=>(
				<Box 
				    key={person.id}
					name={person.name}
					age={person.age} 
					title={person.title}
				/>	
			  ))}
		  </main>
		  </>
		);
	}
}
export default MainClas;
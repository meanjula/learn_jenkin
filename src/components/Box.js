const Box=(props)=>{
	const changeNameHandler=()=>{
		console.log('WOOW')
	}
	return(
	  <div className="box">
		<div>
		  <h2>{props.name}</h2>
		  <p>Title: {props.title}</p>
		  <p>Age:{props.age}</p>
		  <button onClick={changeNameHandler}>Click ME</button>
		</div>
	  </div>
	)
  }
  export default Box;
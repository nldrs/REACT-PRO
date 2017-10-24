import React,{Component} from "react";

class AppMain extends Component{
	/*componentWillMount(){
		console.log("componentWillMount");
	}
	componentDidMount(){
		console.log("componentDidMount");
	}*/
	render(){
		var userName="xiaoli";	
		var dsFlag=true;
		return(
				<div>
					<h1>这是主体</h1>
					<p>{userName==''?'用户还没有登录':'用户名是'+userName}</p>
					<h2>
						<input type='button' value='good job' disabled={dsFlag} />
					</h2>
				</div>
			)
	}
}

export default AppMain;
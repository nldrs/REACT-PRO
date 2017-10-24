import React,{Component} from "react";
import "../../css/footer.css";
import { Input } from 'antd';

class AppFooter extends Component{

	render(){
		// console.log(meFooter);
		return(
			<div>
				<h1 className="footer">这是底部:4545</h1>
				<Input placeholder="Basic usage" />
			</div>
			)
	}
}

export default AppFooter;
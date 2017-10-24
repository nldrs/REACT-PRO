import  React from "react";
import {render} from "react-dom";
import AppHeader from "./js/components/header";
import AppFooter from "./js/components/footer"
import AppMain from "./js/components/main.js"
import 'antd/dist/antd.css';
class Index extends React.Component{
	render(){
		var curCommponent;
		if (true) {
			curCommponent=<AppMain/>;
		}else{
			curCommponent=<AppFooter/>
		}
		return(
			<div>
				<AppHeader/>
				{curCommponent}
				<AppFooter/>
			</div>
			)
	}
}

export default Index;

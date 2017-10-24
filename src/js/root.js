import React ,{Component} from  "react";
import {render} from "react-dom";
import Index from "../index";
import AppHeader from "./components/header.js";
import AppMain from "./components/main.js";
import AppFooter from "./components/footer.js";
import {
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
class Root extends Component{
	render(){
		return(
				<div>
					<HashRouter>
						<Switch>
							<Route exact path="/" component={Index}></Route>
							<Route path="/header" component={AppHeader}></Route>
							<Route path='/main' component={AppMain}></Route>
							<Route path='/footer/:id' component={AppFooter}></Route>
						</Switch>
					</HashRouter>
				</div>

			)
	}
}

render(<Root></Root>,document.getElementById("app-container"))
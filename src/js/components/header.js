import React,{Component}from "react";
//定义组件

class AppHeader extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	miniHeight:false
	  };
	}
	switch(){
		this.setState({
			miniHeight:!this.state.miniHeight
		})
	}
   render(){
const styleComponentHeader={
	header:{
		width:'100%',
		color:'#fff',
		backgroundColor:"#f00",
		fontSize:'40px',
		paddingTop:this.state.miniHeight?"20px":"40px"
	}
}
       return(
          <header style={styleComponentHeader.header} onClick={this.switch.bind(this)}>
            <h1>这是顶部组gddfg</h1>
          </header>
        )
   }
}

export default AppHeader;
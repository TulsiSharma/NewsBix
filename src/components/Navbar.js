import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    state={
        show:false
    }

    handleclick=()=>{
        if(!this.state.show){
            this.setState({show:true});
            this.props.handleshow();
        }
        else{
            this.setState({show:false});
            this.props.handleclose();
        }
    }

    

    render(){
        return(
            <nav>
                <div className="main-wrapper"> 
                           
                   <span className="logo">
                      <Link to="/">NewsBix</Link> 
                   </span>
                  
                   <ul className="items">
                       <li>
                       <i className="fas fa-search" style={{fontSize:"15px"}} onClick={this.handleclick}></i>
                       </li>
                       <li>
                            {/* <a href="/bookmarks" style={{color:"white",textDecoration:"none",fontStyle:"bold",fontSize:"16px"}}>
                                Bookmarks
                            </a>    */}
                            <Link to="/bookmarks" style={{color:"white",textDecoration:"none",fontStyle:"bold",fontSize:"16px"}}>
                                Bookmarks
                            </Link>
                       </li>
                   </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
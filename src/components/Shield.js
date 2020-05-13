import React from "react";
import {Jumbotron,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
class Shield extends React.Component{

    constructor(props){
        super(props);
        this.state={error: false,
            info: null,};
    }

    componentDidCatch(error,info){
        this.setState({
            error: error,
            info: info,
          });
    }

    render(){
        if(this.state.error){
            return(
                <div className="container">
                    <Jumbotron style={{marginTop:"100px",alignSelf:"center",textAlign:"center",backgroundColor:"#8A0707"}}>
                        <h1 style={{color:"white"}}>Something Went Wrong :(</h1>
                        <p>
                        <h2 style={{color:"white"}}>Please ensure Your Network</h2>
                        </p>
                        <p>
                            <Link to="/"><Button variant="light">DashBoard</Button></Link>
                        </p>
                    </Jumbotron>
                </div>
            );
        }
        return this.props.children;
    }
}
export default Shield;
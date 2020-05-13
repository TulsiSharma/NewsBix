import React from "react";
import {Jumbotron,Button} from "react-bootstrap";
class NotFound extends React.Component{
    render(){
        return(
            <div className="container">
                <Jumbotron style={{marginTop:"100px",alignSelf:"center",textAlign:"center",}}>
                    <h1>404</h1>
                    <p>
                       <h2>{this.props.title || "Page Not Found"}</h2>
                    </p>
                    <p>
                        <a href="/"><Button variant="primary">{this.props.btnvalue || "Back To The Site"}</Button></a>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
export default NotFound;
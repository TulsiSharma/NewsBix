import React from "react";
import {Col} from "react-bootstrap";
class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <footer>
                    <Col ls={12} md={12} sm={12} xs={12}>
                    <a href="/" style={{textDecoration:"none"}}>
                        <span>
                            NewsBix
                        </span>
                    </a>
                    <div style={{marginTop:"0px",paddingTop:"0px"}}>
                        <span style={{fontSize:"12px"}}>©copyright 2020 </span>
                    </div> 
                    </Col>
                </footer>
            </div>
        );
    }
}
export default Footer;
import React from "react";
import {Container,Row} from "react-bootstrap"; 
import Items from "./Items";
class Headlines extends React.Component{
    render(){
        if(!this.props.headlines){
            return null;
        }
        return(
            <div className="item-wrapper">
                <Container>
                    <Row>
                        {this.props.headlines.map((val,ind)=> <Items key={ind} inde={ind} item={val} setbookmarks={this.props.setbookmarks}/>)}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Headlines;
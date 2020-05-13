import React from "react";
import {Col,Row} from "react-bootstrap";
class Cards extends React.Component{
    state={
        title:"",
        description:""
    };
    componentDidMount(){
        this.setState({title:this.props.item.title});
        this.setState({description:this.props.item.description});
    }
    render(){
        if(!this.state.description || !this.state.title) return null;
        return(
            <Col lg={6} md={7} sm={11} xs={10} className="Section">
                <div className="cards">
                    <Row>
                        <Col lg={8} md={9} sm={9} xs={11}>
                            <div className="content">
                                <strong>
                                    {this.state.title.substring(0,90)+`...`}
                                </strong>
                                <div className="date"><span>{this.props.item.publishedAt}</span></div>
                                <h6 style={{paddingTop:"2px"}}>{this.props.item.source.name}</h6>
                                <a href={this.props.item.url}  target="_blank" rel="noopener noreferrer"><span style={{paddingTop:"2px"}}>Read More</span></a>
                            </div>
                            

                        </Col>
                        <Col lg={4} md={3} sm={3} xs={1}>
                           <img src={this.props.item.urlToImage} width="100%" height="auto" alt="newsimage"></img>
                        </Col>
                    </Row>
                </div>

            </Col>
        );
        
    }
}

export default Cards;
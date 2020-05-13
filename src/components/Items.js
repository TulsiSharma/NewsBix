import React from "react";
import {Row,Col} from "react-bootstrap";
class Items extends React.Component{
    handleclick=(event)=>{
       this.props.setbookmarks(this.props.item);
    }
    render(){
        if(!this.props.item.title|| !this.props.item.description)
        { 
            return null;
        }
        return(
            <Col lg={12} md={12} sm={12} xs={12}>
                <div className="item">
                    <Row>
                        <Col lg={10} md={9} sm={9} xs={11}>
                            <div className="content">
                                <strong>
                                    {this.props.item.title}
                                </strong>
                                <p style={{marginBottom:"0px",marginBottom:"2px"}}>{this.props.item.description.substring(0,150)+`...`}</p><a href={this.props.item.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                <div className="date"><span>{this.props.item.publishedAt}</span></div>
                               <span>{this.props.item.source.name}</span><i className="fas fa-bookmark" style={{paddingLeft:"10px"}} onClick={this.handleclick} ></i>
                            </div>
                        </Col>
                        <Col lg={2} md={3} sm={3} xs={1}>
                            <img alt="newsimage" src={this.props.item.urlToImage} width="100%" height="auto"></img>
                        </Col>
                    </Row>
                </div>
            </Col>
                
          
        );
    }
}

export default Items;
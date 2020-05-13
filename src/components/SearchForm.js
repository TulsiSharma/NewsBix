import React from "react";
import {Modal,Form} from "react-bootstrap";
class SearchForm extends React.Component{
     QueryRef = React.createRef();
    handlesubmit=(event)=>{
        event.preventDefault();
        this.props.handleclose();
        this.props.redirect(this.QueryRef.current.value);
    }
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Companies Articles</Modal.Title>
                </Modal.Header>
                <Modal.Body>    
                    <Form onSubmit={this.handlesubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search Here" ref={this.QueryRef} />
                            <Form.Text className="text-muted">
                                Article of Microsoft,Amazon,Google,Samsung and lot more around the world.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SearchForm;
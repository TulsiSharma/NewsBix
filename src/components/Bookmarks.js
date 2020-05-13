import React from "react";
import {Row,Col} from "react-bootstrap";    
class Bookmarks extends React.Component{
    state={
        Bookmarks:{}
    }

    componentDidMount(){
        let Bookmarks = localStorage.getItem("NewsBix");
        if(Bookmarks){
            this.setState({Bookmarks:JSON.parse(Bookmarks)});
        }
        console.log(Bookmarks);
    }
    componentDidUpdate(){
        localStorage.setItem("NewsBix",JSON.stringify(this.state.Bookmarks));
    }
    removebookmark=(key)=>{
        const Bookmarks={...this.state.Bookmarks};
        delete Bookmarks[key];
        this.setState({Bookmarks});
    }
    render(){
        if(!this.state.Bookmarks){
            return null;
        }
        if(!Object.keys(this.state.Bookmarks).length){
            return <div className="container" style={{marginTop:"130px",textAlign:"center",backgroundColor:"lightgrey",height:"200px",padding:"70px 30px"}}>
                        <h2><i>No Bookmarks Found </i></h2>
            </div>
        }
        return(
            <div className="wrapper-box">
                <div className="container" style={{marginTop:"20px",overflow:"auto"}}>
                    <div style={{margin:"20px 16px",backgroundColor:"lightgrey",padding:"10px"}}>
                         <h4 style={{fontWeight:"500",fontStyle:"bold"}}>
                            Bookmarks
                         </h4>
                    </div>
                   {
                       Object.keys(this.state.Bookmarks).map(key=>(
                        <Col lg={12} md={12} sm={12} xs={12} key={key}>
                            <div className="item">
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <div className="content">
                                        <button onClick={()=>this.removebookmark(key)} style={{float:"right"}}>&times;</button>
                                            <strong>
                                                {this.state.Bookmarks[key].title}
                                            </strong>
                                        <a href={this.state.Bookmarks[key].url} target="_blank" rel="noopener noreferrer">   Read More</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                       ))
                   }
                </div>
            </div>
        );
    }
}

export default Bookmarks;
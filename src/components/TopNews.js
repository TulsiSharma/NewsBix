import React from "react";
import Cards from "./Cards";
import NotFound from "./NotFound";
class TopNews extends React.Component{
    state={
        isdown:false,
        startX:0,
        scrollLeft:0
    }
    
    handleclick=(event)=>{
        const slider=event.currentTarget;
        const isdown=true;
        const startX=event.pageX - slider.offsetLeft;
        const scrollLeft = slider.scrollLeft;
        this.setState({
            isdown : isdown
        });
        slider.classList.add('active');
        this.setState({startX:startX });
        this.setState({scrollLeft: scrollLeft});
        console.log(this.state.isdown);
        
    }
    handleClick=(event)=>{
        const isdown=false;
        this.setState({isdown:isdown});
        const slider=event.currentTarget;
        slider.classList.remove('active');
        console.log(this.state.isdown);

    }

    handledown=(event)=>{
        const slider=event.currentTarget;
        if(!this.state.isdown){
            return;
        } 
        const x = event.pageX - slider.offsetLeft;
        const walk = (x - this.state.startX) * 2    ; //scroll-fast
        slider.scrollLeft = this.state.scrollLeft - walk;
        console.log(walk);
      
    }
    render(){
        if(!this.props.TopNews){
            return null;
        }
       
        return(
                <div className="main-div" xs={12} onMouseDown={this.handleclick} onMouseLeave={this.handleClick}  onMouseUp={this.handleClick} onMouseMove={this.handledown}>
                    {this.props.TopNews.map((val,ind)=><Cards key={ind} item={val}/>)}
                    
                </div>
                
            
        );

    
    }
}

export default TopNews;
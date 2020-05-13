import React from"react";
import Navbar from "./Navbar";
import Headlines from "./Headlines";
import News from "../Api/News";
import SearchForm from "./SearchForm";
import Shield from "./Shield";
import NotFound from "./NotFound";
class Articles extends React.Component{
    state={
        articles:[],
        Bookmarks:{},
        show:false,
        totalResults:1
    }
    componentDidMount(){
        console.log("mounted!!");
        let Bookmarks=localStorage.getItem("NewsBix");
        if(Bookmarks){
            this.setState({Bookmarks:JSON.parse(Bookmarks)});
        }
        const query = this.props.match.params.name;
        this.getarticles(query);
    }
    
    componentDidUpdate(){
        localStorage.setItem("NewsBix",JSON.stringify(this.state.Bookmarks));
    }
    setbookmarks=(item)=>{
        let Bookmarks = {...this.state.Bookmarks};
        const marks ={
            title:item.title,
            url:item.url
        }
        Bookmarks[item.publishedAt]=marks;
        this.setState({Bookmarks:Bookmarks});
    }
    getarticles=async(query)=>{
        const response = await News.get("everything",{
            params:{
                q:query,
                sortBy:"popularity",
                apiKey:'e4a6153aaf8343bb915342f2b739c487'
            }
        });
        this.setState({totalResults:response.data.totalResults});
        const articles = response.data.articles;
        // console.log(TopNews);
        this.setState({articles:articles});
        console.log(this.state.response);
    }

    handleshow=()=>{
        this.setState({show:true});
    }
    handleclose=()=>{
        this.setState({show:false});
    }
    redirect=(val)=>{
        this.getarticles(val);
        this.props.history.push(`/articles/`+val);
        
    }

    render(){
    if(!this.state.articles){
        return null;
    }
    if(!this.state.articles.length && !this.state.totalResults){
        return <NotFound title="Article You have Searched Not Found" btnvalue="Dashboard"/>
    }
        return(
            <div className="main">
                <div className="wrapper">
                    <Navbar handleshow={this.handleshow} handleclose={this.handleclose}/>
                    <SearchForm show={this.state.show} handleclose={this.handleclose} redirect={this.redirect} />
                    <div className="header">
                        <h5>Articles</h5>
                    </div>
                    <Shield>
                        <Headlines headlines={this.state.articles} setbookmarks={this.setbookmarks}/>
                    </Shield> 
                </div>
            </div>
        );

    }
}
export default Articles;
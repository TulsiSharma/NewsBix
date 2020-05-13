import React from "react";
import "./css/style.css";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import Headlines from "./components/Headlines";
import News from "./Api/News";
import base from "./base";
import SearchForm from "./components/SearchForm";
import Shield from "./components/Shield";
import Footer from "./components/Footer";
class App extends React.Component{
    state={
        Nations:[],
        TopNews:[],
        Headlines:[],
        Nation_wise_date:[],    
        oldvalue :" ",
        ShortNation:[],
        arr:["TopNews","Headlines","Nation_wise_date"],
        Bookmarks:{},
        show:false
    };
    handleshow=()=>{
        this.setState({show:true});
    }
    handleclose=()=>{
        this.setState({show:false});
    }
    componentDidMount(){
        let Bookmarks=localStorage.getItem("NewsBix");
        if(Bookmarks){
            this.setState({Bookmarks:JSON.parse(Bookmarks)});
        }
        //console.log(Bookmarks);
        this.nation = base.syncState(`/Nations`,{
            context:this,
            state: 'Nations'
        }
        );
        this.shortnation = base.syncState(`/ShortNation`,{
            context:this,
            state:"ShortNation"
        }
        );
        this.topnews = base.syncState(`/TopNews`,{
            context:this,
            state:'TopNews'
        }
        );
        this.headline = base.syncState(`/Headlines`,{
            context:this,
            state:'Headlines'
        }
        );
        this.generatedate();
        this.headlines();

    }

    componentDidUpdate(){
        localStorage.setItem("NewsBix",JSON.stringify(this.state.Bookmarks));
    }

    componentWillUnmount(){
        base.removeBinding(this.nation);
        base.removeBinding(this.shortnation);
        base.removeBinding(this.topnews);
        base.removeBinding(this.headline);
    }
    generatedate= async()=>{
        const response = await News.get("top-headlines",{
            params:{
                country:"in",
                language:"en",
                maxResults:"30",
                apiKey:'e4a6153aaf8343bb915342f2b739c487'
            }
        });
        const TopNews = response.data.articles;
        // console.log(TopNews);
        this.setState({TopNews:TopNews});
        
    }

    headlines=async()=>{
        const response= await News.get("top-headlines",{
            params:{
                country:"in",
                category:"technology",
                apiKey:'e4a6153aaf8343bb915342f2b739c487'
            }
        });
        //console.log(response);
        this.setState({Headlines:response.data.articles});
    }

    getcountrynews=async(val)=>{
        const response= await News.get("top-headlines",{
            params:{
                country:val,
                category:"technology",
                apiKey:'e4a6153aaf8343bb915342f2b739c487'
            }
        });
        //console.log(response);
        this.setState({Nation_wise_date:response.data.articles});
        
    }

    handlechange=(event)=>{
        if(this.state.oldvalue===" " || this.state.oldvalue !== event.currentTarget.value){
            this.setState({oldvalue:event.currentTarget.value});
            this.getcountrynews(event.currentTarget.value);
        }
        
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
    redirect=(val)=>{
        this.props.history.push(`/articles/`+val);
    }
    render(){
        return(
            <div className="main" >
                <div className="wrapper">
                    <Navbar handleshow={this.handleshow} handleclose={this.handleclose}/>
                    <SearchForm show={this.state.show} handleclose={this.handleclose} redirect={this.redirect} />
                    <div className="news-title">
                        <div className="title">
                            <h5 style={{color:"black",fontStyle:"bold"}}>Top News</h5>
                        </div>
                        <Shield>
                            <TopNews TopNews={this.state.TopNews}/>
                        </Shield>
                        <div className="headlines">
                            <h5>India's Tech News</h5>
                        </div>
                        <Shield>
                            <Headlines headlines={this.state.Headlines} setbookmarks={this.setbookmarks}/>
                        </Shield>
                        <div className="headlines">
                            <h5>Countries Wise News </h5>
                        </div>
                        <div className="select-bar">
                            <select style={{width:"180px",height:"35px",borderRadius:"6px",backgroundColor:"lightgrey"}} onChange={this.handlechange}>
                                <option style={{backgroundColor:"white",fontWeight:"500"}}>Choose Your Country</option>
                                {this.state.Nations.map((val,ind)=><option key={ind} value={this.state.ShortNation[ind]} style={{backgroundColor:"white",fontWeight:"500"}}>{val}</option>)}
                            </select>
                        </div>
                        <Shield>
                            <Headlines headlines={this.state.Nation_wise_date}/>
                        </Shield>
                        
                    </div>
                    <Footer/>
                    
                </div>

            </div>
        );
    }
}
export default App;
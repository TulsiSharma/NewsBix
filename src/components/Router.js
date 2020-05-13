import {BrowserRouter,Switch,Route} from "react-router-dom";
import React from "react";
import App from "../App";
import Bookmarks from "./Bookmarks";
import Articles from "./Articles.js"
import NotFound from "./NotFound";

class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/bookmarks" component={Bookmarks}/>
                    <Route path="/articles/:name" component={Articles}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;

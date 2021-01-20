import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Wrap from "./Wrap";
import LessonOttizIkki from "./LessonOttizIkki";
import LifeCycleMethods from "./LifeCycleMethods";
import LessonOttizTort from "./LessonOttizTort";
import Hooks from "./Hooks";
import NavigationBar from "./NavigationBar";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Post from "./Post";
import PostView from "./PostView";

class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <Nav/>

                    <Switch>
                        <Route exact path='/' component={Wrap}/>
                        <Route exact path='/product' component={LessonOttizIkki}/>
                        <Route exact path='/lifecycle' component={LifeCycleMethods}/>
                        <Route exact path='/employee' component={LessonOttizTort}/>
                        <Route exact path='/hooks' component={Hooks}/>
                        <Route exact path='/posts' component={Post} />

                        {/*    Dynamic routing*/}
                        <Route exact path='/posts/:id' component={PostView}/>
                        <Route component={NotFound}/>
                    </Switch>

                </BrowserRouter>

            </div>
        );
    }
}

export default Routing;
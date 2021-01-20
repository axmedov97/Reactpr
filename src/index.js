import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card'
import Wrap from "./components/Wrap";
import Uzbegim from "./components/Uzbegim";
import Homework from "./components/Homework";
import LessonOttizIkki from "./components/LessonOttizIkki";
import LifeCycleMethods from "./components/LifeCycleMethods";
import LesOttizUch from "./components/LesOttizUch";
import LessonOttizTort from "./components/LessonOttizTort";
import Hooks from "./components/Hooks";
import Routing from "./components/Routing";
import Post from "./components/Post";


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Wrap/>*/}
    {/*<Uzbegim/>*/}
    {/*<Homework/>*/}
    {/*<LessonOttizIkki/>*/}
    {/* <LifeCycleMethods/>*/}
    {/*<LesOttizUch/>*/}
    {/*<LessonOttizTort/>*/}
    {/*<Hooks/>*/}
    {/*<Post/>*/}
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

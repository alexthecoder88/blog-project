import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './blog/Blog';
import PostCreator from './blog/PostCreator';
import PostEditor from './blog/PostEditor';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Route exact path="/" component={Blog} />
      <Route exact path="/newpost" component={PostCreator} />
      <Route exact path="/editpost" component={PostEditor} />
    </div>
  );
}


ReactDOM.render(
  <HashRouter>
    <div className="App" style={{display:"flex" , justifyContent:"center"}}>
    <App />
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

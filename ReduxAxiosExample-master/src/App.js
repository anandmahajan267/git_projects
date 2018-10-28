import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

          <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" >Manage Posts</a>
    </li>
    
  </ul>
         
        </nav>
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h3 className="display-5">Welcome to Manage Posts!</h3>
              <p>This is a simple poc app for manage posts.</p>
            </div>
          </div>
          <div className="container">
            <div >
              <CreatePost />
            </div>
            <div >
              <PostList />
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default App;

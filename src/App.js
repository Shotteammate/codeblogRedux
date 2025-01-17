import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/posts/PostDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AddPost from './components/posts/AddPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch >
          <Route exact path='/codeblogReactRedux' component={Dashboard} />
          <Route path='/codeblogReactRedux/post/:id' component={PostDetail} />
          <Route path='/codeblogReactRedux/signin' component={SignIn} />
          <Route path='/codeblogReactRedux/signup' component={SignUp} />
          <Route path='/codeblogReactRedux/addpost' component={AddPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

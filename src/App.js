
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import NotFind from './components/NotFind/NotFind';

function App() {

  return (
    <div  className="App">
      <Header></Header>
      <Router>
       <Switch>
         <Route path="/home">
         <Home/>
         </Route>
         <Route path="/post/:id">
           <PostDetails/>
         </Route>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path='*'>
           <NotFind/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import SearchPage from './Pages/SearchPage';

const App = (props) => {
  return (
    <div>
     <Router>
      <Switch>
       <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/searchPage">
         <SearchPage/>
       </Route>
      </Switch>
     </Router>
    </div>
  )
}

export default App;
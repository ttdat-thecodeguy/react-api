import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Menu />
            <div class="container">
            <div class="row">
                {
                    this.showContent(routes)
                }
            </div>
            </div>
        </div>
      </Router>

      
    );
  }

  showContent = (routes) => {
      var result = null;
      if(routes.length > 0){
        result = routes.map((route, idx) => {
           return( <Route key={idx} path={route.path} exact={route.exact} component={route.main} ></Route> )
        })
      }
      return <Switch>{result}</Switch>
    }

}
export default App;
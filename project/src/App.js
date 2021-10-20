
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Admin = lazy(() => import("./components/admin"));
const Login = lazy(() => import("./components/Login"));
const Manager = lazy(() => import("./components/manager"));
const Developer = lazy(() => import("./components/developer"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  
  }
  render() {
    return (
      <Router>
         <Suspense
          fallback={
            <div className="loader-container">
              <div className="center"></div>

              <div className="inner-spin">
                <div className="inner-arc inner-arc_start-a"></div>
                <div className="inner-arc inner-arc_end-a"></div>

                <div className="inner-arc inner-arc_start-b"></div>
                <div className="inner-arc inner-arc_end-b"></div>

                <div className="inner-moon-a"></div>
                <div className="inner-moon-b"></div>
              </div>

              <div className="outer-spin">
                <div className="outer-arc outer-arc_start-a"></div>
                <div className="outer-arc outer-arc_end-a"></div>

                <div className="outer-arc outer-arc_start-b"></div>
                <div className="outer-arc outer-arc_end-b"></div>

                <div className="outer-moon-a"></div>
                <div className="outer-moon-b"></div>
              </div>
            </div>
          }
        >
        <Switch>
        <Route
                      exact
                      path="/Login"
                      component={Login}
                    />
                    <Route
                      exact
                      path="/Admin"
                      component={Admin}
                    />
                     <Route
                      exact
                      path="/Manager"
                      component={Manager}
                    />
                     <Route
                      exact
                      path="/Developer"
                      component={Developer}
                    />
        </Switch>
       </Suspense>
      </Router>
    );
  }
}
export default App;

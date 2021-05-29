import routes from "./routes";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App(props) {
  let showMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <Router>
      <div className="App">{showMenu(routes)}</div>
    </Router>
  );
}
export default App;

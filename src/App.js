import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Home}/>
      </Switch>
    </div>
  )
}

export default App;

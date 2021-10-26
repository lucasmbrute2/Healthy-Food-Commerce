import './App.scss';
import { Switch, Route } from "react-router-dom"
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/register' component={Register}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;

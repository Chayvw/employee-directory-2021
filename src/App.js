import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './componets/Home';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer'
import Search from './componets/Search';

function App() {
  return (

    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/home' component={Home} />
        <Route path ='/search' component={Search} />
      </div>
      <Footer />
    </Router>


  );
}

export default App;

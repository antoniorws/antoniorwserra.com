import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Articles from './pages/Articles/Articles';


function App() {
  return <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route path={"/index"} component={Home}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/articles"} component={Articles}/>
                <Redirect to={"/index"}/>
            </Switch> 
        </div>
    </BrowserRouter>;
}

export default App;

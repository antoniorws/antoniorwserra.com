import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import MainIndex from './components/MainIndex/MainIndex';
import About from './components/About/About';
import Articles from './components/Articles/Articles';


function App() {
  return <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route path={"/index"} component={MainIndex}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/articles"} component={Articles}/>
                <Redirect to={"/index"}/>
            </Switch> 
        </div>
    </BrowserRouter>;
}

export default App;

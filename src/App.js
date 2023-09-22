import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import MainIndex from './components/MainIndex/MainIndex';
import About from './components/About/About';


function App() {
  return <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route path={"/about"} component={About}/>
                <Route path={"/index"} component={MainIndex}/>
                <Redirect to={"/index"}/>
            </Switch> 
        </div>
    </BrowserRouter>;
}

export default App;

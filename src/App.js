import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from "./pages/Projects";


function App() {
  return <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route path={"/about"} component={About}/>
                <Route path={"/articles"} component={Articles}/>
                <Route path={"/projects"} component={Projects}/>
                <Route path="/" component={Home}/>
                <Redirect to="/"/>
            </Switch> 
            <Footer/>
        </div>
    </BrowserRouter>;
}

export default App;

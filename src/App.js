
import React, { Component } from 'react';
import logo from './components/logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";
import 'react-datepicker/dist/react-datepicker.css';
import moment, { relativeTimeThreshold } from "moment";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        //this.state = {isLoggedIn: false}
        console.log('LocalStorage remember '+localStorage.getItem('remember'));

        const isLogged = JSON.parse(localStorage.getItem('remember'));
        console.log('isLoggedIn '+isLogged);

        this.state = {isLoggedIn: isLogged}
        //this.state = {isLoggedIn: localStorage.getItem('remember') == true ? true : false}
        console.log(this.state.isLoggedIn);
        
        //this.componentDidMount = this.componentDidMount.bind(this);
        //this.render = this.render.bind(this);        
    }
/*
    componentDidMount() {
        const isLogged = localStorage.getItem('remember') === true;
        console.log('Estado '+this.state.isLoggedIn);
        console.log('isLoggedIn '+isLogged);
        this.setState({isLoggedIn: isLogged});
    }*/
    changeView(){       
        //const newIsLoggedIn = this.props.isLoggedIn == true ? true : false;
        //const newIsLoggedIn = this.state.isLoggedIn == false ? true : false;
        const newIsLoggedIn = localStorage.getItem('remember') ? true : false;
        this.setState({isLoggedIn: newIsLoggedIn});
    }

    render() {
        const LoginView = () => (
            <Login/>
        );

        const TodoAppView = () => (
            <TodoApp/>
        );

        {/*const view = this.state.isLoggedIn == false ? LoginView : TodoAppView;*/}
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <h2>Estado de Logged In {localStorage.getItem('remember')}</h2>
                    <br/>
                    <br/>

                    {/*<ul>
                        <li><Link to="/" onClick={this.changeView}>Login</Link></li>
                        <li><Link to="/todo" onClick={this.changeView}>Todo</Link></li>
                    </ul>*/}
                      
                    <div>
                        <Route component={!this.state.isLoggedIn ? LoginView : TodoAppView}/>                                               
                        {/*<Route component={!localStorage.getItem('remember') ? LoginView : TodoAppView}/>*/}
                    </div>
                </div>
            </Router>
        );
    }
}
//App.defaultProps = {isLoggedIn: false}; 
export default App;
import React from "react"
import Header from './Components/Header'
import Home from './Components/Home'
import Chords from './Components/Chords/Chords'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import styles from './App.module.css'
import NotFoundPage from "./Components/NotFoundPage"

/*
Main component
*/
function App() {
    return(
        <div className={styles.Container}>
            <Router basename={process.env.REACT_APP_PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/chords" component={Chords}/>  
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

import React from "react"
import Header from './Components/Header'
import Home from './Components/Home'
import Chords from './Components/Chords'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styles from './App.module.css'

function App() {
    return(
        <Router>
            <div className={styles.Container}>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/chords" component={Chords}/> 
                </Switch>
            </div>
        </Router>
    );
}

export default App;

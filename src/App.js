import React, { useEffect } from "react"
import useViewport from './Components/CustomHooks'
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
    const {width} = useViewport()

    useEffect(() => {
        // get the root element and update the overflow state
        var root = document.querySelector(':root');

        // If device width is less than 1280, it is a mobile device. Use max-content as width instead.
        root.style.setProperty('--device-width', width > 1000 ? '100%' : 'max-content');
    } ,[width])

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

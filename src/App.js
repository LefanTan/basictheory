import React, { useEffect } from "react"
import useViewport from './Components/Helpers/CustomHooks'
import Header from './Components/Header'
import Home from './Components/Home'
import ChordsPage from './Components/Chords/ChordsPage'
import {Switch, Route, HashRouter} from 'react-router-dom'
import styles from './App.module.css'
import NotFoundPage from "./Components/NotFoundPage"
import ScalesPage from "./Components/Scales/ScalesPage"

/*
Main component
*/
function App() {
    const {width} = useViewport()

    useEffect(() => {
        // get the root element and update the overflow state
        var root = document.querySelector(':root');
        
        // If device width is less than 1280, it is a mobile device. Use max-content as width instead.
        root.style.setProperty('--device-width', width > 1000 ? '100%' : 'fit-content');
    },[width])

    return(
        <div className={styles.Container}>
            <HashRouter basename={process.env.REACT_APP_PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path={process.env.REACT_APP_HOME_PAGE_URL} component={Home}/>
                    <Route path={process.env.REACT_APP_CHORDS_PAGE_URL} component={ChordsPage}/>  
                    <Route path={process.env.REACT_APP_SCALES_PAGE_URL} component={ScalesPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;

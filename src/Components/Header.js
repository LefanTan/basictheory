import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'

// Header component
class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <Link to="/"><button className={styles.title_button}>Basictheory.io</button> </Link>
                <div className={styles.button_row}>
                    <Link to={process.env.REACT_APP_CHORDS_PAGE_URL}>
                        <button className={styles.header_button}>Chords</button>
                    </Link>
                    <Link to={process.env.REACT_APP_SCALES_PAGE_URL}>
                        <button className={styles.header_button}>Scales</button>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;
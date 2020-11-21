import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'

class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <Link to="/"><button className={styles.title_button}>Basictheory.io</button> </Link>
                <div className={styles.button_row}>
                    <Link to="/chords">
                        <button className={styles.header_button}>Chords</button>
                    </Link>
                    <Link to="/scales">
                        <button className={styles.header_button}>Scales</button>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;
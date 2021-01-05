import React, {useEffect, useState} from 'react'
import styles from './Sidebar.module.css'
import PropTypes from 'prop-types';

function Sidebar(props){
    useEffect(() => {
        // get the root element and update the overflow state
        var root = document.querySelector(':root');

        // if side bar is active, show y scrollbar
        root.style.setProperty('--overflow-y', props.toggle ? 'visible' : 'hidden');
    }, [props.toggle])

    Sidebar.propTypes = {
        toggle: PropTypes.bool,
        children: PropTypes.element.isRequired
    }

    return(
        <div className={styles.Container}>
            <div data-testid='sidebar' className={props.toggle ? styles.SidebarActive : styles.Sidebar}>
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar;
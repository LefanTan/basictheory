/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import * as Fi from 'react-icons/fi'
import styles from './Sidebar.module.css'

function Sidebar(props){
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)
    const useSidebar = (state) => setSidebar(state)

    useEffect(() => {
        // get the root element and update the overflow state
        var root = document.querySelector(':root');

        // if side bar is active, show y scrollbar
        root.style.setProperty('--overflow-y', sidebar ? 'visible' : 'hidden');
    }, [sidebar])

    useEffect(() => {
        useSidebar(props.toggle)
    },[props.toggle])

    return(
        <div className={styles.Container}>
            <button className={styles.sidebarButton} onClick={toggleSidebar} ><Fi.FiMenu className={styles.sidebarIcon}/></button>
            <div data-testid='sidebar' className={sidebar ? styles.SidebarActive : styles.Sidebar}>
                {props.children}
            </div>
        </div>
    )
}

export default Sidebar;
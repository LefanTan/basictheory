import React from 'react'
import styles from './NotFoundPage.module.css'

/*
This component is displayed when the page does not exist
*/
function NotFoundPage(){
    return(
        <div data-testid='not-found' className={styles.Container}>
            <h1>404 Page Does Not Exist</h1>
            <h2>{"Maybe I'm still working on this page, chill!"}</h2>
        </div>
    );
}

export default NotFoundPage;
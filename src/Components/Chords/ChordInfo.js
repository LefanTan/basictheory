import React, {Component} from 'react'
import styles from './ChordInfo.module.css'
import dchord from './imgs/dmajor-type1.png'

class ChordInfo extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        // Get all the possible images
        const imageDictionary = require.context("./imgs", true, /.png$/)

        return (
            <div className={styles.Container}>
                <h1>Major 7th chord</h1>    
                <div className={styles.rowContainer}>
                    <img className={styles.mainChordImg} src={imageDictionary("./dmajor-type1.png").default}/>
                    <div>
                        <div className={styles.rowContainer}>
                            <h1>C</h1> 
                            <p>root</p>
                        </div>
                        <li>nice</li>
                        <li>nice</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChordInfo;
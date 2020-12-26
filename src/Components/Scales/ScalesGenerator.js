import React, { useEffect, useState} from 'react'
import styles from './ScalesGenerator.module.css'
import useViewport from '../Helpers/CustomHooks'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'

export default function ScalesGenerator(props){

    const [imgContainerWidth, setImgContainerWidth] = useState(60)
    const {width} = useViewport()

    useEffect(() => {
        // If less than 1000, it is on a device and so change the width accordingly 
        if(width < 1000) 
            setImgContainerWidth(90)
        else 
            setImgContainerWidth(60)

        console.log(imgContainerWidth)
    }, [width])

    var imgContainer = {
        position: 'relative',
        width: `${imgContainerWidth}%`,
        maxHeight: '100%',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aliceblue'
    }

    return(
        <div className={styles.Container}>
            <div style={imgContainer}>
                <Fret className={styles.Img}/>
                <div className={styles.stringName}>
                    <p>E</p>
                </div>
            </div>
        </div>
    )
}
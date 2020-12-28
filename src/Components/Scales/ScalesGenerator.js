import React, { useEffect, useState} from 'react'
import styles from './ScalesGenerator.module.css'
import useViewport from '../Helpers/CustomHooks'
import PropTypes from 'prop-types';
import {ReactComponent as ScaleButtonOpaque} from './imgs/scaleButtonOpaque.svg'
import {ReactComponent as ScaleButtonOutline} from './imgs/scaleButtonOutline.svg'
import {ReactComponent as Fret} from './imgs/fretBoard.svg'

// Produce a fret board of 18 frets
// Also generate a scale based on the CAGED system
export default function ScalesGenerator(props){

    const selectedNote = 'G'
    const stringNotes = ['E', 'A', 'D', 'G', 'B', 'E']
    const [imgContainerWidth, setImgContainerWidth] = useState(60)

    // get the current width of the device view port
    const {width, height} = useViewport()

    // Update ImgContainerWidth depending on device type
    useEffect(() => {
        // If less than 1000, it is on a device and so change the width accordingly 
        if(width < height) 
            setImgContainerWidth(90)
        else 
            setImgContainerWidth(65)
    }, [width])

    useEffect(() => {
        
    }, [props])

    var imgContainer = {
        position: 'relative',
        width: `${imgContainerWidth}%`,
        maxHeight: '100%',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    // Props validation
    ScalesGenerator.propTypes = {
        notes: PropTypes.array
    }

    return(
        <div className={styles.Container}>
            <div style={imgContainer}>
                <Fret className={styles.Img}/>
                {stringNotes.map((note, index) => {
                    // just some equation to position the note letters
                    var noteTopPos = 50 - 20.5 * index 
                    
                    var stringName ={
                        position: 'absolute',
                        top: `${noteTopPos}%`,
                        left: '-35px',

                        width: 'fit-content',
                        height: '100%',
                    
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                    return(
                        <div key={index} style={stringName}>
                            <h3 className={styles.h3}>{note}</h3>
                        </div>
                    )}
                )}
                <ScalesButton fret={10} string={6}>b3</ScalesButton>
            </div>
        </div>
    )
}

export function ScalesButton(props){
    var topPos = 20 * props.string - 28
    var leftPos = -1 + 5.5 * props.fret

    var scaleButtonContainer = {
        position: 'absolute',       
        top: `${topPos}%`,
        left: `${leftPos}%`,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '3%',
        height: '15%'
    }

    ScalesButton.propTypes = {
        onClick: PropTypes.func,
        fret: PropTypes.number,
        string: PropTypes.number
    }
    
    return(
        <div style={scaleButtonContainer}>
            <button className={styles.scaleButton} onClick={props.onClick}>
                <ScaleButtonOpaque className={styles.scaleButtonImg}/>
            </button>
            
            <p className={styles.scaleButtonText}>{
                // eslint-disable-next-line react/prop-types
                props && props.children
            }</p>
        </div>
    )
}
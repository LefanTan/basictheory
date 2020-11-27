import React, {useState, useEffect} from 'react'

// This hook returns an updated width and height of the device
function useViewport(){
    const [width, setWidth] = React.useState(window.innerWidth)
    const [height, setHeight] = React.useState(window.innerHeight)
    const [isDevice, setIsDevice] = React.useState(false);

    React.useEffect(() =>{
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }   
        window.addEventListener("resize", handleWindowResize)

        // when component unmount, unsubscribe from event
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    React.useEffect(() => {
        setIsDevice(height > width)
    })


    return {width, height, isDevice}
}

export default useViewport;
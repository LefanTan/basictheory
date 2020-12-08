/* eslint-disable react/prop-types */
import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
        console.warn(error)
    }

    render(){
        const style = {
            color: getComputedStyle(document.documentElement).getPropertyValue('--main-color'),
            fontSize: 'large',
            fontFamily: 'Montserrat',
            fontWeight: '300'            
        }
        
        if(this.state.hasError){
            // Display fall back UI
            return this.props.fallback ? 
                this.props.fallback : 
                <h1 style={style}> Error caught with this component </h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
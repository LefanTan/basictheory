import {React, Component} from "react"
import {Link} from "react-router-dom"
import styles from "./Home.module.css"

// Home page component
class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            searchName: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){

    }

    render(){
        return(
            <div className={styles.Container}>
                <Link to={process.env.REACT_APP_CHORDS_PAGE_URL}> <button className={styles.mainPageButton}>Chords</button> </Link>
                <Link to={process.env.REACT_APP_SCALES_PAGE_URL}> <button className={styles.mainPageButton}>Scales</button> </Link>
            </div>
        );
    }
}

export default Home;

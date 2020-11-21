import {React, Component} from "react"
import {Link} from "react-router-dom"
import styles from "./Home.module.css"

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
                <Link to="/chords"> <button className={styles.mainPageButton}>Chord</button> </Link>
                <Link to="/scales"> <button className={styles.mainPageButton}>Scales</button> </Link>
            </div>
        );
    }
}

export default Home;

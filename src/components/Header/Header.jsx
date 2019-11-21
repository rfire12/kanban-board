import React, {Component} from "react";
import styles from "./styles.scss";

class Header extends Component {
    state = {};
    render(){
        console.log(styles);
        return(
            <header className={styles.red}>test</header>
        )
    }
}
export default Header;
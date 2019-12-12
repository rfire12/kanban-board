import React, {Component} from "react";
import "../../assets/fonts/fonts.scss";
import styles from "./Header.scss";

class Header extends Component {
    state = {};
    render(){
        return(
            <header>
                <a href="#">kanboard</a>
            </header>
        )
    }
}
export default Header;
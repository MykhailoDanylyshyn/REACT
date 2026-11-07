import { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>Домашні пельмені</h1>
                <p>Смачні пельмені з м'ясною начинкою</p>
            </header>
        );
    }
}

export default Header;
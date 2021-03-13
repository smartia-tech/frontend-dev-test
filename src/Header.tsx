import React from "react";
import logo from './assets/logo.svg';
import './Header.scss';

class Header extends React.Component {
    render() {
        return(
            <div className="sx-header">
                <div className="container d-flex">
                    <img className="sx-logo" src={logo} alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;
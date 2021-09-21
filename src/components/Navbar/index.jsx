import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-sm color-background navbar-light">
            <Link to="/" className="navbar-brand logo">
                <img src="/assets/images/logo.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><i className="fa fa-users" aria-hidden="true"> Nhân viên </i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Department" className="nav-link"><i className="fa fa-id-card-o" aria-hidden="true"> Phòng Ban </i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Payroll" className="nav-link"><i className="fa fa-money" aria-hidden="true"> Bảng lương </i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
import React from "react";

const Navbar = () => {
    return (
        <>
            {/* <div className="container-fluid p-3 bg-primary text-white">
                
                <i className="fa fa-users" aria-hidden="true"> Nhân viên </i>
                <i className="fa fa-id-card-o" aria-hidden="true"> Phòng Ban </i>
                <i className="fa fa-money" aria-hidden="true"> Bảng lương </i>
            </div> */}

            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
                
                <li className="nav-item active">
                <a className="nav-link" href="#"><i className="fa fa-users" aria-hidden="true"> Nhân viên </i></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-id-card-o" aria-hidden="true"> Phòng Ban </i></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-money" aria-hidden="true"> Bảng lương </i></a>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar;
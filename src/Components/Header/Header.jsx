import React from 'react';
import './headerStyle.css';
import {Button} from  '@mui/material'
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav_Style">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyCinema</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Button component={Link} to={"/cinema"} variant={'text'} color={"inherit"}>Cinema</Button>
                            </li>
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                            {/*       aria-expanded="false">*/}
                            {/*        Dropdown*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu">*/}
                            {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                            {/*        <li>*/}
                            {/*            <hr className="dropdown-divider"/>*/}
                            {/*        </li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <Button variant="contained" type="submit" color="secondary"> search</Button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
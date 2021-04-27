import React from 'react';
import Navmod from "./nav.module.css";
import {NavLink} from "react-router-dom";
import photo from "../../img/Profile/avatar.png";


const Nav = () => {

    return (
        <nav>
            <div className={Navmod.navigation}>
                <ul>

                    <NavLink to="/friends" activeClassName={Navmod.activeLink}>
                        <li><span>Users</span></li>
                    </NavLink>

                    <NavLink to="/setting" activeClassName={Navmod.activeLink}>
                        <li> <span>Setting</span></li>
                    </NavLink>
                </ul>
            </div>

            <div className={Navmod.friends}>
                <h3>User of the year</h3>
                <ul>
                    <table><tr>
                   <td> <li><img src={photo} alt="f"/></li></td>
                   <td><h4>Pavel Durov</h4></td>
                    </tr></table>
                </ul>
            </div>

            <div className={Navmod.friends}>
                <h3>User of the month</h3>
                <ul>
                <table><tr>
                   <td> <li><img src={photo} alt="f"/></li></td>
                   <td><h4>Mark Zuckerberg</h4></td>
                    </tr></table>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;
import React, {useState} from 'react';
import headermod from "./header.module.css";
import {NavLink} from "react-router-dom";
import Navmod from "../Nav/nav.module.css";
import SearchContainer from "./Search/SearchContainer";
import exit from "../../img/images/logout.svg";
import logo from "../../img/images/logo.png";
import heart from "../../img/images/heart.svg";
import user from "../../img/images/user.svg";


const Header = props => {
    let [menu, setMenu] = useState(false);

    return (
        <header>
            <div className={headermod.headerWrap + " " + (menu ? headermod.headerWrapShow : "")}>
                <div className={headermod.leftside}>
                    <NavLink to="/news"><img src={logo} className={headermod.logo} alt="logo" /></NavLink>
                </div>

                <div className={headermod.rightside}>
                    <SearchContainer/>

                    <div className={headermod.note  + " " + headermod.hide}>
                        
                    </div>

                    <div className={headermod.note + " " + headermod.hide + " " + headermod.messages} >
                        <NavLink to='/dialogs' >
                            <i className="fas fa-envelope"></i>
                        </NavLink>
                        {props.newMessageCount ? <div className={headermod.newMessageCount}>{props.newMessageCount}</div> : null}

                        <NavLink to="/profile"> <img src={user} className={headermod.user} alt="user" /> </NavLink>
                        {/* <img src={users} className={headermod.users} /> */}
                        <NavLink to="/music"> <img src={heart} className={headermod.heart} alt="like" /></NavLink>
                    </div>

                    {/* <h3>{props.isLogined ? props.login :  <NavLink exact={true} to="/login">Please sign in</NavLink>}</h3> */}

                    {props.isLogined && <div className={headermod.note + " " + headermod.logout} onClick={() => {
                        props.logout();
                    }}>
                       <img src={exit} alt="exit" className={headermod.exit}/>
                    </div>}
                </div>
            </div>

            <AdaptiveMenu menuHandler={setMenu} menu={menu} isLogined={props.isLogined} logout={props.logout} newMessageCount={props.newMessageCount}/>
        </header>


    );
}


const AdaptiveMenu = props => {

    return (<div className={headermod.adaptivemenu}>
        {props.isLogined && <div className={headermod.note + " " + headermod.logout} onClick={() => {
            props.logout();
        }}>
            <i className="fas fa-power-off" title={"logout"}></i>
        </div>}

        {!props.isLogined && <div className={headermod.note}>
            <NavLink to="/login">
                <i className="fas fa-sign-in-alt" title={"logout"}></i>
            </NavLink>
        </div>}


        <div className={headermod.adaptiveMenu}>
            <NavLink to="/setting" activeClassName={Navmod.activeLink}><i
                className="fas fa-cogs"></i></NavLink>
        </div>


        <div className={headermod.adaptiveMenu}>
            <NavLink to="/friends" activeClassName={Navmod.activeLink}><i
                className="fas fa-user-friends"></i></NavLink>
        </div>

        <div className={headermod.adaptiveMenu + " "  + headermod.messages}>
            <NavLink to='/dialogs'>
                <i className="fas fa-envelope"></i>
            </NavLink>
            {props.newMessageCount ? <div className={headermod.newMessageCount}>{props.newMessageCount}</div> : null}
        </div>

        <div className={headermod.adaptiveMenu}>
            <NavLink to="/search"><i className="fas fa-search"></i></NavLink>
        </div>

        <div className={headermod.adaptiveMenu}>
            <NavLink to="/profile" activeClassName={Navmod.activeLink}><i
                className="fas fa-address-card"></i></NavLink>
        </div>
    </div>)
}

export default Header;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import WebPimg from './Webpimg';
import { MdPhoneInTalk } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import Menuitem from "./Menuitem";
import menus from "../data/menuitem.json";

const Header = ({mystyle=null}) => {

    const [isMenu, setisMenu] = useState(false);

    return (
        <>
        <header style={mystyle}>
            <div className="header_wrapper">
                <div className="header_row">
                    <div className="header_logo">
                        <NavLink to="/">  
                        <WebPimg src="assets/images/logo.png" alt="logo" webpsrc="assets/images/webp/logo.webp" />
                        </NavLink>  
                    </div>
                    <div className="heamburger" onClick={() => setisMenu(!isMenu)}>
                        {isMenu===true ?
                            <TfiClose style={{
                                    position: 'fixed',
                                    zIndex: 99,
                                    top: '20px',
                                    right: '20px',
                                }}
                                size="1.5em"
                            /> : <><span /><span /><span /></>}
                    </div>

                    <nav style={{ display: isMenu ? 'block' : '' }}>
                        <ul>
                            { menus.map((item, index) => <Menuitem key={index} item={item} />) }
                        </ul>
                    </nav>

                    <div className="head_cont">
                        <div className="get_purposal"><a className="common_btn" href="#">GET A PROPOSAL</a></div>
                        <div className="head_phone"><a href="tel:888.680.0174"><MdPhoneInTalk/> 888.680.0174</a></div>
                    </div>

                </div>
            </div>
        </header>
        </>
    );
}

export default Header;
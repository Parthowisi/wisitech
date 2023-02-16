import React, { useState } from 'react';
import WebPimg from './Webpimg';
import { MdPhoneInTalk } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import Menuitem from "./Menuitem";
import menus from "../data/menuitem.json";

const Header = () => {

    const [isMenu, setisMenu] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    return (
        <>
        <header>
            <div className="header_wrapper">
                <div className="header_row">
                    <div className="header_logo">
                        <WebPimg src="assets/images/logo.png" alt="logo" webpsrc="assets/images/webp/logo.webp" />
                    </div>
                    <div className="heamburger" onClick={toggleClass}>
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

                    <nav className={isMenu === true ? "mobile_open" : "" }>
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
import { useState } from "react";
import { FiChevronDown } from 'react-icons/fi'

function Menuitem({item}){
    const [open, setOpen] = useState(false);

    var iClass = item.level ==1 ? 'fa fa-angle-right' : 'fa fa-angle-down';
    var subMenuClass = item.level ==1 ? 'sub_sub_menu' : 'submenu';
    var menuActive = item.level ==1 ? 'submenu_active' : 'menu_active';
    if(open){
        iClass = `${iClass} ${menuActive}`;
        subMenuClass = `${subMenuClass} show`;
    }

    if(!item.hide){
        
        if(item.childrens){
            return (
                <li className={item.level==1 ? "sub_menu_arrow" : "menu_arrow"}>
                    <a href={item.path || "#"}>{item.title}</a>
                    
                    <i className={iClass} onClick={() => setOpen(!open)} />
                    
                    <ul className={subMenuClass} style={{ display: open ? 'block' : '' }}>
                        { item.childrens.map((child, index) => <Menuitem key={index} item={child} />) }
                    </ul>
                </li>
            )
        }else{
            return (
                <li><a href={item.path || "#"}>{item.title}</a></li>
            )
        }
    }
}

export default Menuitem;
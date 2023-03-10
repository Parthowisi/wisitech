import { useState } from "react"
import { NavLink } from 'react-router-dom'

function Menuitem({item}){
    const [open, setOpen] = useState(false);

    var iClass = item.level ==1 ? 'fa fa-angle-right' : 'fa fa-angle-down'
    const liClass = item.level ==1 ? 'sub_menu_arrow' : 'menu_arrow'
    var subMenuClass = item.level ==1 ? 'sub_sub_menu' : 'submenu'
    var menuActive = item.level ==1 ? 'submenu_active' : 'menu_active'

    if(open){
        iClass = `${iClass} ${menuActive}`
        subMenuClass = `${subMenuClass} show`
    }
        
    if(item.childrens){
        return (
            <li className={liClass}>
                <NavLink to={item.path || "#"}>{item.title}</NavLink>
                <i className={iClass} onClick={() => setOpen(!open)} />
                
                <ul className={subMenuClass} style={{ display: open ? 'block' : '' }}>
                    { item.childrens.map((child, index) => <Menuitem key={index} item={child} />) }
                </ul>
            </li>
        )
    }else{
        return (
            <li className={item.class || ""}><NavLink to={item.path || "#"}>{item.title}</NavLink></li>
        )
    }
}

export default Menuitem;
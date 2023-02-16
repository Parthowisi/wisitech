import { useState } from "react";
import { FiChevronDown } from 'react-icons/fi'

function Menuitem({item}){
    const [open, setOpen] = useState(false)

    if(!item.hide){
        
        if(item.childrens){
            return (
                <li className={item.level==1 ? "sub_menu_arrow" : "menu_arrow"}>
                    <a href={item.path || "#"}>{item.title}</a>
                    
                    {item.level==1 ? <i className="fa fa-angle-right" /> : <i className="fa fa-angle-down" />}
                    
                    <ul className={item.level==1 ? "sub_sub_menu" : "submenu"}>
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
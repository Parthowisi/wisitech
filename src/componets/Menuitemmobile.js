import { useState } from "react";
import { FiChevronDown } from 'react-icons/fi'

function Menuitemmobile({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <a href={item.path || "#"} className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.title}    
                    </span> 
                    <FiChevronDown className="toggle-btn" onClick={() => setOpen(!open)} />
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <Menuitemmobile key={index} item={child} />) }
                </div>
            </a>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.title}
            </a>
        )
    }
}

export default Menuitemmobile;
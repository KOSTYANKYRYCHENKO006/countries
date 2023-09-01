import { Link } from "react-router-dom"
import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.scss"

export const Menus = () => {
    return (
        <div className="menu-tabs__container">
            {menuTabs && menuTabs.map(menu => <div key={menu} className="menu-tab" >
                <Link to={`${menu[0]}`}>
                    {menu[1]}
                </Link>
            </div>)}
        </div>
    )
}
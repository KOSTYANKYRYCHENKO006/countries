import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.css"

export const Menus = () => {
    return (
        <div className="menu-tabs__container">
            {menuTabs && menuTabs.map(menu => <a key={menu} className="menu-tab" href="#">{menu}</a>)}
        </div>
    )
}
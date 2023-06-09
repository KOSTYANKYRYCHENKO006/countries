import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.css"

export const Menus = ({setCurrentTab}) => {
    return (
        <div className="menu-tabs__container">
            {menuTabs && menuTabs.map(menu => <div key={menu} onClick={() => setCurrentTab(menu[0])} className="menu-tab" >{menu[1]}</div>)}
        </div>
    )
}
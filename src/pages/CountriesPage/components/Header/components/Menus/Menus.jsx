import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.scss"

export const Menus = () => {
    return (
        <div className="menu-tabs__container">
            {menuTabs && menuTabs.map(menu => <div key={menu} className="menu-tab" >
                <a href={`/${menu[0]}`}>
                    {menu[1]}
                </a>
            </div>)}
        </div>
    )
}
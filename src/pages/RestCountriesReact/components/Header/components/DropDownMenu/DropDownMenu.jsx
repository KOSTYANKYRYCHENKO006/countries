import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.scss"

export const DropDownMenu = () => {

    const switcherOnClick = () => {
        setMenuHidden(!menuHidden)
    }

    const [menuHidden, setMenuHidden] = useState(true);

    let menuObject = document?.querySelector(".menu-tabs")

    if (menuObject) {
        if (menuHidden) {
            menuObject.style.transform = "translate(-100%)";
        }
        else {
            menuObject.style.transform = "translate(-0%)"
        }
    }

    return (
        <div className="drop-down-menu__container">
            <div className="menu-switcher" onClick={switcherOnClick}>
                <MenuIcon fontSize="large" />
            </div>
            {
                <div className="menu-tabs">
                    {
                        menuTabs && menuTabs.map(
                            menu =>
                                <div key={menu} className="menu-tab" >
                                    <Link to={`${menu[0]}`}>
                                        {menu[1]}
                                    </Link>
                                </div>
                        )
                    }
                </div>
            }
        </div>
    )
}
import { Title } from "../../../../components/Title"
import { DropDownMenu } from "./components/DropDownMenu"
import { Menus } from "./components/Menus"

import "./style.scss"

export const Header = () => {
    return (
        <>
            <Title />
            <Menus />
            <DropDownMenu />
        </>
    )
}
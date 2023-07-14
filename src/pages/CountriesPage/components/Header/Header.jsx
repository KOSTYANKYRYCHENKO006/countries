import { Title } from "../../../../components/Title"
import { Menus } from "./components/Menus/Menus"

import "./style.scss"

export const Header = () => {
    return (
        <>
            <Title />
            <Menus />
        </>
    )
}
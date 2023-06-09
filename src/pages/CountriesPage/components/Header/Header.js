import { Title } from "../../../../components/Title"
import { Menus } from "./components/Menus/Menus"

export const Header = ({setCurrentTab}) => {
    return (
        <>
            <Title />
            <Menus setCurrentTab={setCurrentTab} />
        </>
    )
}
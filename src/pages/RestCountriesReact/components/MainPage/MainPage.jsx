import { Routes } from "../../../../constants/Routes"
import {Link} from "react-router-dom"

import image from "../../../../images/WarInUkraine.jpg"
import afgan from "../../../../images/Afganistan.png"
import siria from "../../../../images/Siria.png"
import sudan from "../../../../images/Sudan.jpg"


import "./style.scss"

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="logo_text">
                <h1 className="text">Добро пожаловать на наш сайт, здесь вы можете найти информацию про страны,
                    а именно, где ваша страна находится, ее территория, с какими
                    странами она пересекается
                </h1>
                <Link to={Routes.Countries}>
                    <button className="text_btn" type="text" id="Button">На страницу Страны</button>
                </Link>
            </div>

            <div className="information">
                <div className="information__header">
                    <h2>Новости про страны</h2>
                </div>
                <div className="information__content">
                        <div className="infos">
                            <img src={image} alt=""></img>
                            <p>Война в Украине</p>
                        </div>

                        <div className="infos">
                            <img src={afgan} alt=""></img>
                            <p>Что на даный момент происходит в Афганистане</p>
                        </div>

                        <div className="infos">
                            <img src={siria} alt=""></img>
                            <p>Гражданская война в Сирии</p>
                        </div>

                        <div className="infos">
                            <img src={sudan} alt=""></img>
                            <p>О событиях в Судане</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
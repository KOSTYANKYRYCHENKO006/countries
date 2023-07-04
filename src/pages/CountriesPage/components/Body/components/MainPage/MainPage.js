import image from "../../../../../../images/WarInUkraine.jpg"
import afgan from "../../../../../../images/Afganistan.png"
import siria from "../../../../../../images/Siria.png"
import sudan from "../../../../../../images/Sudan.jpg"


import "./style.css"

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className="logo_text">
                <h1 className="text">Добро пожаловать на наш сайт, сдесь вы можете найти информацыю про страны,
                    а именно, где ваша страна находиться, ее територия, с какими
                    странами она пересикаеться
                </h1>
                <button className="text_btn" type="text">На страницу Страны</button>
            </div>

            <div className="information">
                <div className="information__header">
                    <h2>Новости про страны</h2>
                </div>
                    <div className="sidebar_container">
                        <div className="infos info_ukraine">
                            <img src={image} alt=""></img>
                            <p className="p_ukr">Война в Украине</p>
                        </div>

                        <div className="infos info_afganistan">
                            <img src={afgan} alt=""></img>
                            <p className="p_afganistan">Что на даный момент происходит в Афганистане</p>
                        </div>

                        <div className="infos info_siria">
                            <img src={siria} alt=""></img>
                            <p className="p_siria">Гражданская война в Сирии</p>
                        </div>

                        <div className="infos info_sudan">
                            <img src={sudan} alt=""></img>
                            <p className="p_sudan">О событиях в Судане</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
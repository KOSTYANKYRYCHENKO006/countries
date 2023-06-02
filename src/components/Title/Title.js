import logo from "../../images/photo_2023-06-02_21-29-03.jpg"

import "./style.css"

export const Title = () => {
    return (
        <div className="wrapper">
            <div className="logo_img">
                <img className="img" src={logo} alt=""></img>

                <div className="headerInfo">
                    <h3>Страны</h3>
                    <p>Это веб-сайт про страны</p>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}



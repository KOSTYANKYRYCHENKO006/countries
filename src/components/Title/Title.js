import logo from "../../images/Globe-transformed.png"

import "./style.css"

export const Title = () => {
    return (
        <div className="wrapper">
            <div className="logo_img">
                <img className="img" src={logo} alt=""></img>

                <div className="headerInfo">
                    <h3 className="countriesHeader"><a className="title_href" href = "src/components/Title.js">Страны</a></h3>
                    <p className="paragrapf_logo">Это веб-сайт про страны</p>
                </div>
            </div>
            <hr></hr>
        </div>

    )
}



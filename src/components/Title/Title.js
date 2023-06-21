import logo from "../../images/Globe-transformed.png"

import "./style.css"

export const Title = () => {
    return (
        <div className="wrapper">
            <div className="logo_img">
                <img className="img" src={logo} alt=""></img>

                <div className="header_info">
                    <h3 className="countries_header"><a className="title_href" href = "#">Страны</a></h3>
                    <p className="paragrapf_logo">Это веб-сайт про страны</p>
                </div>
            </div>
            <hr></hr>
            <div className="search"> 
                    <input type="text" 
                    placeholder="Поиск...">
                    </input>
                    <button className="input_btn"></button>
            </div>
        </div>
    )
}


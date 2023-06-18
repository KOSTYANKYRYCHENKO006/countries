
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

            <div className="Information">
                <div className="Header">
                    <h2>Новости про страны</h2>
                </div>
            </div>
        </div>
    )
}
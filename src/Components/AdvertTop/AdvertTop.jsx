import "./AdvertTop.css";
import logo from "../../assets/logo.png";
import advert from "../../assets/advertttt.gif";
export const AdvertTop = () => {
    return (
        <section className="advertTop">
            <div className="advertTopContainer">
                <div className="left">
                    <a>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="right">
                    <a>
                        <img src={advert} style={{maxWidth: "100%"}} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
};
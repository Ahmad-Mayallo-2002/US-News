import { AdvertTop } from "../../Components/AdvertTop/AdvertTop";
import { Footer } from "../../Components/Footer/Footer";
import { HotLinks } from "../../Components/HotLinks/HotLinks";
import { MainBody } from "../../Components/MainBody/MainBody";
import { MainBodyFive } from "../../Components/MainBodyFive/MainBodyFive";
import { MainBodyFour } from "../../Components/MainBodyFour/MainBodyFour";
import { MainBodyThree } from "../../Components/MainBodyThree/MainBodyThree";
import { MainBodyTwo } from "../../Components/MainBodyTwo/MainBodyTwo";
import { MainContent } from "../../Components/MainContent/MainContent";
import { NavbarBottom } from "../../Components/NavbarBottom/NavbarBottom";
import { NavbarTop } from "../../Components/NavbarTop/NavbarTop";
import { NewsLetter } from "../../Components/NewsLetter/NewsLetter";
import "./Home.css";
export const Home = () => {
    return (
        <div className="home">
            <div className="homeWrapper">
                <NavbarTop />
                <AdvertTop />
                <NavbarBottom />
                <HotLinks />
                <MainContent />
                <MainBody />
                <NewsLetter />
                <MainBodyTwo />
                <MainBodyThree />
                <MainBodyFour />
                <MainBodyFive />
                <Footer />
            </div>
        </div>
    )
}
import "./Widgets.css";
import image from "../../assets/ad-300x250-1.jpg"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaShareAlt, FaTwitter, FaVimeo, FaVimeoV, FaYoutube } from "react-icons/fa";
export const Widgets = () => {
    return (
        <div className="widgets">
            <div className="main-image">
                <img src={image} alt="" />
            </div>
            <div className="headingTitle">
                <div className="heading center-y">
                    <span className="title">stay connected</span>
                    <div className="icon"><FaShareAlt /></div>
                </div>
            </div>
            <div className="socials">
                <div className="box">
                    <div><FaFacebookF /></div>
                    <span>655</span>
                    <span>Likes</span>
                </div>
                <div className="box">
                    <div><FaTwitter /></div>
                    <span>123</span>
                    <span>Followers</span>
                </div>
                <div className="box">
                    <div><FaGooglePlusG /></div>
                    <span>123</span>
                    <span>Followers</span>
                </div>
                <div className="box">
                    <div><FaVimeoV /></div>
                    <span>123</span>
                    <span>Followers</span>
                </div>
                <div className="box">
                    <div><FaLinkedinIn /></div>
                    <span>123</span>
                    <span>Likes</span>
                </div>
                <div className="box">
                    <div><FaYoutube /></div>
                    <span>1,000</span>
                    <span>Subscribers</span>
                </div>
            </div>
        </div>
    )
};
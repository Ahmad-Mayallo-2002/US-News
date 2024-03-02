import "./NavbarTop.css";
import { MdLocationOn, MdRssFeed, MdOutlineLanguage, MdOutlinePersonOutline } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { BiCalendar } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { ImGooglePlus } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
export const NavbarTop = () => {
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = () => {
        setDropDown(!dropDown);
    };
    return (
        <nav className="navbarTop">
            <div className="navbarContainer center-y">
                <div className="left center-y">
                    <div className="item">
                        <MdLocationOn />
                        <span>New York</span>
                    </div>
                    <div className="item">
                        <WiDayCloudy />
                        <span>21C</span>
                    </div>
                    <div className="item">
                        <BiCalendar />
                        <span>To (Sunday 15 January 2024)</span>
                    </div>
                </div>
                <div className="right center-y">
                    <div className="item">
                        <MdOutlinePersonOutline />
                        <span>Login/Regester</span>
                    </div>
                    <div className="item" onClick={handleDropDown}>
                        <MdOutlineLanguage />
                        <span>English</span>
                        <RxCaretDown />
                    </div>
                    <div className="icons">
                        <RiFacebookFill />
                        <RiTwitterFill />
                        <ImGooglePlus />
                        <MdRssFeed />
                        <FaYoutube />
                    </div>
                    {
                        dropDown && (
                            <ul>
                                <li><a>English</a></li>
                                <li><a>French</a></li>
                                <li><a>Germany</a></li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </nav>
    )
};
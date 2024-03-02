import "./HotLinks.css";
import { FaRegStar, FaRegHeart, FaHotjar,FaEye } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

export const HotLinks = () => {
    return (
        <div className="hotlinks">
            <div className="grid">
                <div className="col">
                    <FaRegStar />
                    <h3>Featured News</h3>
                </div>
                <div className="col">
                    <FaRegHeart />
                    <h3>Most Popular</h3>
                </div>
                <div className="col">
                    <FaHotjar />
                    <h3>Hot News</h3>
                </div>
                <div className="col">
                    <AiFillThunderbolt />
                    <h3>Trending News</h3>
                </div>
                <div className="col">
                    <FaEye />
                    <h3>Most Watched</h3>
                </div>
            </div>
            <div className="box">
                <h3 className="center-y">News Updates <span>(Update 20 Minutes Ago)</span></h3>
            </div>
        </div>
    );
};
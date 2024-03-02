import { FaHeart } from "react-icons/fa";
import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import twitter from "../../assets/twitter.jpg";
import box1 from "../../assets/technology-02.jpg";
import box2 from "../../assets/technology-03.jpg";
import box3 from "../../assets/technology-04.jpg";
import "./StyleTwo.css";
export const StyleTwo = () => {
    return (
        <div className="styleTwo">
            <HeadingTitle category="Technology" />
            <figure>
                <img src={twitter} alt="" />
                <div className="row center-y-between">
                    <span>computer</span>
                    <span><FaHeart /></span>
                </div>
                <article>
                    <ul className="center-y-between">
                        <li>Davis Miller</li>
                        <li>10 January 2023</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Eum, itaque corporis.</p>
                </article>
            </figure>
            <hr />
            <div className="box">
                <img src={box1} alt="" />
                <article>
                    <small>Smith Marker 07 Jan 2023</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste praesentium.</p>
                </article>
            </div>
            <hr />
            <div className="box">
                <img src={box2} alt="" />
                <article>
                    <small>Smith Marker 07 Jan 2023</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste praesentium.</p>
                </article>
            </div>
            <hr />
            <div className="box">
                <img src={box3} alt="" />
                <article>
                    <small>Smith Marker 07 Jan 2023</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iste praesentium.</p>
                </article>
            </div>
            <hr />
        </div>
    )
};
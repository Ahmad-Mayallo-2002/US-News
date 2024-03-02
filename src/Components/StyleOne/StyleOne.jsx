import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import "./StyleOne.css";
import Russia from "../../assets/russia2.jpg"
import worldNews1 from "../../assets/world-news-02.jpg";
import worldNews2 from "../../assets/world-news-03.jpg";
import worldNews3 from "../../assets/world-news-04.jpg";
import worldNews4 from "../../assets/world-news-05.jpg";
import { AiFillThunderbolt } from "react-icons/ai";
export const StyleOne = () => {
    return (
        <div className="styleOne">
            <HeadingTitle category="world's news" />
            <figure>
                <img src={Russia} alt="Russia" />
                <div className="row center-y-between">
                    <span>War</span>
                    <span><AiFillThunderbolt /></span>
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
            <div className="grid">
                    <div className="col">
                        <img src={worldNews1} alt="" />
                        <div className="row">
                            <span>Smith Martinez</span>
                            <span>07 Jan 23</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col">
                        <img src={worldNews2} alt="" />
                        <div className="row">
                            <span>Jacksone Moore</span>
                            <span>03 Jan 23</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
            </div>
                <hr />
            <div className="grid">
                <div className="col">
                    <img src={worldNews3} alt="" />
                    <div className="row">
                        <span>Courtney Jones</span>
                        <span>05 Dec 22</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="col">
                    <img src={worldNews4} alt="" />
                    <div className="row">
                        <span>Madison Barker</span>
                        <span>30 Nov 22</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
};
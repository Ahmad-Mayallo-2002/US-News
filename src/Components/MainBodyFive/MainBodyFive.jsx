import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import "./MainBodyFive.css";
import { FaEye } from "react-icons/fa";
import advert1 from "../../assets/ad-150x150-1.jpg";
import advert2 from "../../assets/ad-150x150-2.jpg";
import reader1 from "../../assets/readers-opinion-01.png";
import reader2 from "../../assets/readers-opinion-02.png";
import reader3 from "../../assets/readers-opinion-03.png";
export const MainBodyFive = () => {
    return (
        <section className="mainBodyFive">
            <div className="mainBodyFiveWrapper">
                <div className="grid">
                    <div className="col food-recioes">
                        <HeadingTitle category="foods & recipes" />
                        <div className="row">
                            <article>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </article>
                            <article>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </article>
                            <article>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </article>
                        </div>
                    </div>
                    <div className="advert center">
                        <img src={advert1} alt="" />
                        <img src={advert2} alt="" />
                    </div>
                </div>
                <div className="grid">
                    <div className="col gallery">
                        <HeadingTitle category="photo gallery" />
                        <article>
                            <div className="row center-y-between">
                                <span>serfer</span>
                                <FaEye />
                            </div>
                            <div className="text">
                                <small>Lorem ipsum dolor sit amet.</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita iusto hic explicabo nemo ad velit!</p>
                            </div>
                        </article>
                        <div className="grid">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="opinion">
                        <HeadingTitle category="readers opinion" />
                        <div className="users">
                            <div className="box center-y">
                                <img src={reader1} alt="" />
                                <div className="text">
                                    <q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, vel cum!</q>
                                    <small>Lorem, ipsum dolor.</small>
                                </div>
                            </div>
                            <div className="box center-y">
                                <img src={reader2} alt="" />
                                <div className="text">
                                    <q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, vel cum!</q>
                                    <small>Lorem, ipsum dolor.</small>
                                </div>
                            </div>
                            <div className="box center-y">
                                <img src={reader3} alt="" />
                                <div className="text">
                                    <q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, vel cum!</q>
                                    <small>Lorem, ipsum dolor.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
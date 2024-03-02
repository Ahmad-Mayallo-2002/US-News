import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import { CiStar } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import finance2 from "../../assets/finance-02.jpg";
import finance3 from "../../assets/finance-03.jpg";
import finance4 from "../../assets/finance-04.jpg";
import finance5 from "../../assets/finance-05.jpg";
import sports2 from "../../assets/sports-02.jpg";
import sports3 from "../../assets/sports-03.jpg";
import sports4 from "../../assets/sports-04.jpg";
import sports5 from "../../assets/sports-05.jpg";
import newsWidget1 from "../../assets/news-widget-01.jpg";
import newsWidget2 from "../../assets/news-widget-02.jpg";
import newsWidget3 from "../../assets/news-widget-03.jpg";
import newsWidget4 from "../../assets/news-widget-04.jpg";
import advert from "../../assets/ad-300x250-2.jpg";
import healthFitness2 from "../../assets/health-and-fitness-02.jpg";
import healthFitness3 from "../../assets/health-and-fitness-03.jpg";
import healthFitness4 from "../../assets/health-and-fitness-04.jpg";
import healthFitness5 from "../../assets/health-and-fitness-05.jpg";
import lifestyle2 from "../../assets/lifestyle-02.jpg";
import lifestyle3 from "../../assets/lifestyle-03.jpg";
import lifestyle4 from "../../assets/lifestyle-04.jpg";
import lifestyle5 from "../../assets/lifestyle-05.jpg";
import "./MainBodyTwo.css";
export const MainBodyTwo = () => {
    return (
        <section className="mainBodyTwo">
            <section className="mainBodyTwoWrapper">
                <div className="grid">
                    <div className="item">
                        <div className="first-content content">
                            <HeadingTitle category="business" />
                            <article>
                                <div className="row center-y-between">
                                    <span>finance</span>
                                    <CiStar />
                                </div>
                                <div className="text">
                                    <small>Davis Millar 10 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </article>
                            <hr />
                            <div className="box">
                                <img src={finance2} alt="" />
                                <article>
                                    <small>Smith Marten 07 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repellat in.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={finance3} alt="" />
                                <article>
                                    <small>Smith Marten 07 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repellat in.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={finance4} alt="" />
                                <article>
                                    <small>Smith Marten 07 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repellat in.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={finance5} alt="" />
                                <article>
                                    <small>Smith Marten 07 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repellat in.</p>
                                </article>
                            </div>
                        </div>
                        <div className="second-content content">
                            <HeadingTitle category="healthcare" />
                            <article>
                            <div className="row center-y-between">
                                <span>health&amp;fitness</span>
                                <FaFire />
                            </div>
                            <div className="text">
                                <small>News Title</small>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, consequuntur ipsam.</p>
                            </div>
                            </article>
                            <hr />
                            <div className="sports">
                                <div className="col">
                                    <img src={healthFitness2} alt="" />
                                    <small>Author Title</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="col">
                                    <img src={healthFitness3} alt="" />
                                    <small>Author Title</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="sports">
                                <div className="col">
                                    <img src={healthFitness4} alt="" />
                                    <small>Author Title</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="col">
                                    <img src={healthFitness5} alt="" />
                                    <small>Author Title</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="first-content content">
                            <HeadingTitle category="football" />
                            <article>
                                <div className="row center-y-between">
                                    <span>sports</span>
                                    <IoEye />
                                </div>
                                <div className="text">
                                    <small>Davis Millar 10 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </article>
                            <hr />
                            <div className="sports">
                                <div className="col">
                                    <img src={sports2} alt="" />
                                    <small>Smith Marten 7 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                                <div className="col">
                                <img src={sports3} alt="" />
                                    <small>Smith Marten 7 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="sports">
                                <div className="col">
                                    <img src={sports4} alt="" />
                                    <small>Smith Marten 7 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                                <div className="col">
                                <img src={sports5} alt="" />
                                    <small>Smith Marten 7 Jan 2023</small>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="second-content content">
                            <HeadingTitle category="fashion" />
                            <article>
                            <div className="row center-y-between">
                                <span>lifestyle</span>
                                <CiHeart />
                            </div>
                            <div className="text">
                                <small>News Title</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis praesentium.</p>
                            </div>
                            </article>
                            <hr />
                            <div className="box">
                                <img src={lifestyle2} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quis est.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={lifestyle3} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quis est.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={lifestyle4} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quis est.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={lifestyle5} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quis est.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <HeadingTitle category="featured news" />
                        <div className="news-col">
                            <ul>
                                <li>Hot News</li>
                                <li>Trendy News</li>
                                <li>Most Watched</li>
                            </ul>
                            <div className="box">
                                <img src={newsWidget1} alt="" />
                                <article>
                                    <small>News Title</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={newsWidget2} alt="" />
                                <article>
                                    <small>News Title</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={newsWidget3} alt="" />
                                <article>
                                    <small>News Title</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex.</p>
                                </article>
                            </div>
                            <hr />
                            <div className="box">
                                <img src={newsWidget4} alt="" />
                                <article>
                                    <small>News Title</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex.</p>
                                </article>
                            </div>
                        </div>
                        <HeadingTitle category="Advertisement" />
                        <figure className="advert">
                            <img src={advert} alt="" />
                        </figure>
                    </div>
                </div>
            </section>
        </section>
    )
}
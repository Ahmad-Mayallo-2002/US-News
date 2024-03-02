import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import "./MainBodyFour.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import politics2 from "../../assets/politics-02.jpg";
import politics3 from "../../assets/politics-03.jpg";
import politics4 from "../../assets/politics-04.jpg";
import politics5 from "../../assets/politics-05.jpg";
import lifestyle2 from "../../assets/lifestyle-02.jpg";
import lifestyle3 from "../../assets/lifestyle-03.jpg";
import lifestyle4 from "../../assets/lifestyle-04.jpg";
import lifestyle5 from "../../assets/lifestyle-05.jpg";
export const MainBodyFour = () => {
    return (
        <section className="mainBodyFour">
            <div className="mainBodyFourWrapper">
                <div className="grid">
                    <div className="item">
                        <HeadingTitle category="poitics" />
                        <article className="mainContent">
                            <div className="row center-y-between">
                                <span>election</span>
                                <AiFillThunderbolt />
                            </div>
                            <div className="text">
                                <small>Lorem ipsum dolor sit.</small>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</p>
                            </div>
                        </article>
                        <hr />
                        <div className="box">
                            <img src={politics2} alt="" />
                            <div className="text">
                                <small>Lorem, ipsum.</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatum incidunt?</p>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <img src={politics3} alt="" />
                            <div className="text">
                                <small>Lorem, ipsum.</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatum incidunt?</p>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <img src={politics4} alt="" />
                            <div className="text">
                                <small>Lorem, ipsum.</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatum incidunt?</p>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <img src={politics5} alt="" />
                            <div className="text">
                                <small>Lorem, ipsum.</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatum incidunt?</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <HeadingTitle category="entertainment" />
                        <article className="mainContent">
                            <div className="row center-y-between">
                                <span>election</span>
                                <CiHeart />
                            </div>
                            <div className="text">
                                <small>Lorem ipsum dolor sit.</small>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</p>
                            </div>
                        </article>
                        <hr />
                        <div className="cols">
                            <div className="col">
                                <img src={lifestyle2} alt="" />
                                <div className="text">
                                    <small>Lorem, ipsum.</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={lifestyle3} alt="" />
                                <div className="text">
                                    <small>Lorem, ipsum.</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="cols">
                            <div className="col">
                                <img src={lifestyle4} alt="" />
                                <div className="text">
                                    <small>Lorem, ipsum.</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={lifestyle5} alt="" />
                                <div className="text">
                                    <small>Lorem, ipsum.</small>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <HeadingTitle category="voiting poll (checkbox)" />
                        <div className="checkbox">
                            <div className="vote-now">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis similique!</h4>
                                <hr />
                                <div className="vote-row center-y-between">
                                    <label className="center-y">
                                        <input type="checkbox" name="foot" className="center" />
                                        Qatar
                                    </label>
                                    <progress min="0" max="100" value="60"></progress>
                                    <span>60%</span>
                                </div>
                                <div className="vote-row center-y-between">
                                    <label className="center-y">
                                        <input type="checkbox" name="foot" className="center" />
                                        Russia 2018
                                    </label>
                                    <progress min="0" max="100" value="28"></progress>
                                    <span>28%</span>
                                </div>
                                <div className="vote-row center-y-between">
                                    <label className="center-y">
                                        <input type="checkbox" name="foot" className="center" />
                                        Brazil 2014
                                    </label>
                                    <progress min="0" max="100" value="7"></progress>
                                    <span>07%</span>
                                </div>
                                <button className="vote-button">Vote Now</button>
                            </div>
                        </div>
                        <HeadingTitle category="voiting poll (radio)" />
                        <div className="radio">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugiat repudiandae quos provident accusantium.</h4>
                            <hr />
                            <div className="vote-radio">
                                <div className="vote-row center-y-between">
                                    <label>
                                        <input type="radio" name="vote" />
                                        Yes
                                    </label>
                                    <progress min="0" max="100" value="55"></progress>
                                    <span>55%</span>
                                </div>
                                <div className="vote-row center-y-between">
                                    <label>
                                        <input type="radio" name="vote" />
                                        No
                                    </label>
                                    <progress min="0" max="100" value="82"></progress>
                                    <span>82%</span>
                                </div>
                                <div className="vote-row center-y-between">
                                    <label>
                                        <input type="radio" name="vote" />
                                        Average
                                    </label>
                                    <progress min="0" max="100" value="55"></progress>
                                    <span>37%</span>
                                </div>
                                <button className="vote-button">Vote Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
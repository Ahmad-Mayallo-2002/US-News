import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import audiovideo2 from "../../assets/audio-video-02.jpg";
import audiovideo3 from "../../assets/audio-video-03.jpg";
import audiovideo4 from "../../assets/audio-video-04.jpg";
import audiovideo5 from "../../assets/audio-video-05.jpg";
import video from "../../assets/newUpdate.mp4";
import advert from "../../assets/ad-970x90.jpg";
import "./MainBodyThree.css";
export const MainBodyThree = () => {
    return (
        <>
            <section className="mainBodyThree">
                <div className="mainBodyThreeWrapper">
                    <HeadingTitle category="audio & video" />
                    <div className="grid">
                        <div className="col">
                            <video src={video} controls autoPlay></video>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src={audiovideo2} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aperiam ipsa.</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={audiovideo3} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aperiam ipsa.</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={audiovideo4} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aperiam ipsa.</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={audiovideo5} alt="" />
                                <div className="text">
                                    <small>Lorem ipsum dolor sit amet.</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, aperiam ipsa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="advert">
                <img src={advert} alt="" />
            </div>
        </>
    )
}
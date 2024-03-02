import { MdMailOutline } from "react-icons/md";
import "./NewsLetter.css";
import { IoIosSend } from "react-icons/io";
import adv from "../../assets/advertttt.gif";
export const NewsLetter = () => {
    return (
        <div className="newsLetter">
            <img src={adv} alt="" />
            <article>
                <div className="headingTitle">
                    <div className="heading center-y">
                        <span className="title">get newsletter</span>
                        <div className="icon">
                            <MdMailOutline />
                        </div>
                    </div>
                </div>
                <form action="#">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, molestiae?</p>
                    <div>
                        <input type="text" placeholder="E-mail Address" />
                        <button><IoIosSend /></button>
                    </div>
                </form>
            </article>
        </div>
    )
}
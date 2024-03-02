import { HeadingTitle } from "../HeadingTitle/HeadingTitle";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css";
export const Footer = () => {
    return (
        <footer>
            <div className="contact">
                <div className="grid">
                    <div className="col">
                        <HeadingTitle category="about us" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo id aspernatur veniam perspiciatis explicabo natus ipsa non ex, eveniet harum, cupiditate enim temporibus provident!</p>
                        <a href="/" className="center-y">Read More <MdOutlineDoubleArrow /></a>
                        <ul>
                            <li className="center-y">
                                <FaLocationDot />
                                NewYork US
                            </li>
                            <li className="center-y">
                                <IoMdMail />
                                example@gmail.com
                            </li>
                            <li className="center-y">
                                <IoCallSharp />
                                +123 123 123
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <HeadingTitle category="useful links" />
                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                Gadgets
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Shop
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Terms And Conditions
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Forums
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Top News of This Week
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Special Recipes
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Sign Up
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <HeadingTitle category="advertisment" />
                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                Post an Add
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Adds Renew
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Price of Advertisement
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Adds Closed
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Monthly or Yearly
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Trial Adds
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Add Masking
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <HeadingTitle category="career" />
                        <ul>
                            <li>
                                <MdKeyboardArrowRight />
                                Available Post
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Career Details
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                How to Apply ?
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Freelance Job
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Be a Member
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Apply Now
                            </li>
                            <li>
                                <MdKeyboardArrowRight />
                                Send Your Resume
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="foot center-y-between">
                <div className="left">
                    &copy;2023 <span>USNEWS</span> All Rights Are Reserved
                </div>
                <div className="right">
                    <ul>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Support</li>
                    </ul>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaLinkedinIn /></li>
                        <li><FaTwitter /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
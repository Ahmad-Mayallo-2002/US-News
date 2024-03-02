import { FaAngleRight } from 'react-icons/fa';
import image1 from "../../assets/post-01.jpg";
import image2 from "../../assets/post-02.jpg";
import image3 from "../../assets/post-03.jpg";
import image4 from "../../assets/post-04.jpg";

import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
export const HomeList = () => {
    return (
        <ul className='home secondary-list'>
            <li><a>Home Default</a></li>
            <li><a>Home Boxed</a></li>
            <li><a className="center-y">Home RTL <FaAngleRight /></a></li>
            <li><a className="center-y">Home Versions <FaAngleRight /></a></li>
        </ul>
    )
};

export const WorksList = () => {
    return (
        <div className="works secondary-list">
            <div className="grid">
                <article>
                    <span>Beach</span>
                    <img src={image1} alt="" />
                    <IoMdEye />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum commodi earum pariatur quasi! Nihil?</p>
                </article>
                <article>
                    <span>News</span>
                    <img src={image2} alt="" />
                    <FaStar />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum commodi earum pariatur quasi! Nihil?</p>
                </article>
                <article>
                    <span>Ice Hiking</span>
                    <img src={image3} alt="" />
                    <AiFillThunderbolt />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum commodi earum pariatur quasi! Nihil?</p>
                </article>
                <article>
                    <span>Mountain</span>
                    <img src={image4} alt="" />
                    <FaRegHeart />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi harum commodi earum pariatur quasi! Nihil?</p>
                </article>
            </div>
        </div>
    )
};

export const CategoryList = () => {
    return (
        <div className='category-list'>
            <ul>
                <h4>World's News</h4>
                <li><a>US & Canada</a></li>
                <li><a>Europe</a></li>
                <li><a>Africa</a></li>
                <li><a>Asia</a></li>
                <li><a>Middle Ease</a></li>
                <li><a>Asia Paciffic</a></li>
            </ul>
            <ul>
                <h4>Documentation</h4>
                <li><a>Featured Documentation</a></li>
                <li><a>People & Power</a></li>
                <li><a>Rebel Education</a></li>
                <li><a>Rewend</a></li>
                <li><a>Fault Lines</a></li>
                <li><a>News 360 Degree World's</a></li>
            </ul>
            <div>
                <ul>
                    <h4>Sports</h4>
                    <li><a>Football</a></li>
                    <li><a>Cricket</a></li>
                    <li><a>Hockey</a></li>
                </ul>
                <ul>
                    <h4>Movies</h4>
                    <li><a>Hollywood</a></li>
                    <li><a>Dollywood</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Business</h4>
                    <li><a>US Business</a></li>
                    <li><a>Middle East Business</a></li>
                    <li><a>Europe Business</a></li>
                </ul>
                <ul>
                    <h4>Weather</h4>
                    <li><a>North Pole</a></li>
                    <li><a>South Pole</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Education</h4>
                    <li><a>Africa Child Education</a></li>
                    <li><a>Bangladeshi Education</a></li>
                    <li><a>Middle East Education</a></li>
                </ul>
                <ul>
                    <h4>Health</h4>
                    <li><a>Africa Poor Child Health</a></li>
                    <li><a>Fitness and Health</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h4>Humanities</h4>
                    <li><a>Help for Syrian Refuges</a></li>
                    <li><a>Help for Afgan Children</a></li>
                    <li><a>Help for African Children</a></li>
                </ul>
                <ul>
                    <h4>Animals</h4>
                    <li><a>African Animals</a></li>
                    <li><a>Australlian Animals</a></li>
                </ul>
            </div>
        </div>
    )
}
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./HeadingTitle.css";
export const HeadingTitle = ({category}) => {
    return (
        <div className="headingTitle">
            <div className="heading center-y">
                <span className="title">{category}</span>
                <div className="icon center-y">
                    <FaLongArrowAltLeft />
                    <div className="divider">/</div>
                    <FaLongArrowAltRight />
                </div>
            </div>
        </div>
    )
}
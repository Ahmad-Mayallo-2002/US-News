import { StyleOne } from "../StyleOne/StyleOne";
import { StyleTwo } from "../StyleTwo/StyleTwo";
import { Widgets } from "../Widgets/Widgets";
import { WorldNews } from "../../category";
import "./MainBody.css";
export const MainBody = () => {
    return (
        <section className="main-body">
            <div className="mainBodyWrapper">
                <div className="item">
                    <StyleOne {...WorldNews} />
                </div>
                <div className="item">
                    <StyleTwo />
                </div>
                <div className="item">
                    <Widgets />
                </div>
            </div>
        </section>
    );
};
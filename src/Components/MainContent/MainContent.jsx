import { AiFillThunderbolt } from "react-icons/ai";
import "./MainContent.css";
export const MainContent = () => {
    return (
        <section className="main-content">
            <div className="grid">
                <div className="col">
                    <div className="row center-y">
                        <span>policies</span>
                        <span className="icon center-y"><AiFillThunderbolt /></span>
                    </div>
                    <article>
                        <h4>Molly Nagle 10 January 2023</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, praesentium.</p>
                    </article>
                </div>
                <div className="col">
                    <div className="row center-y">
                        <span>travel</span>
                        <span className="icon center-y"><AiFillThunderbolt /></span>
                    </div>
                    <article>
                        <h4>Molly Nagle 10 January 2023</h4>
                        <p>Lorem ipsum dolor sit.</p>
                    </article>
                </div>
                <div className="col">
                    <div className="row center-y">
                        <span>education</span>
                        <span className="icon center-y"><AiFillThunderbolt /></span>
                    </div>
                    <article>
                        <h4>Molly Nagle 10 January 2023</h4>
                        <p>Lorem ipsum dolor sit.</p>
                    </article>
                </div>
                <div className="col">
                    <div className="row center-y">
                        <span>Electorns</span>
                        <span className="icon center-y"><AiFillThunderbolt /></span>
                    </div>
                    <article>
                        <h4>Molly Nagle 10 January 2023</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime alias tempore natus ut eius. Obcaecati, culpa?</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
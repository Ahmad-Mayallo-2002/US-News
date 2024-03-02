import { useState } from "react";
import "./NavbarBottom.css";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CategoryList, HomeList, WorksList } from "./NavbarBottomComponents";

export const NavbarBottom = () => {
  const [state, setState] = useState([false, false, false]);

  const handleClick = (index) => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };
  return (
    <nav className="navbarBottom center-y">
      <div className="navbarBottomWrapper center-y">
        <ul className="dropdown center-y-between">
            <li>
                <a onClick={() => handleClick(0)}>Home <FaAngleDown /></a>
                { state[0] && <HomeList /> }
            </li>
            <li>
                <a onClick={() => handleClick(1)}>Works News <FaAngleDown /></a>
                { state[1] && <WorksList /> }
            </li>
            <li>
                <a>National</a>
            </li>
            <li>
                <a>Financial</a>
            </li>
            <li>
                <a>Entertainment</a>
            </li>
            <li>
                <a>LifeStyle</a>
            </li>
            <li>
                <a>Technology</a>
            </li>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Travel <FaAngleDown /></a>
            </li>
            <li>
                <a>Sports</a>
            </li>
            <li>
                <a onClick={() => handleClick(3)}>Category <FaAngleDown /></a>
                { state[3] && <CategoryList /> }
            </li>
            <li>
                <a>Pages <FaAngleDown /></a>
            </li>
        </ul>
        <div className="search center-y">
            <IoSearch />
        </div>
      </div>
    </nav>
  );
};
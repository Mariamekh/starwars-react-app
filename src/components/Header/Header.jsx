import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Favorite from "./../Favorite/Favorite";
import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";
import { useTheme } from "@context/ThemeProvider";
import { useEffect, useState } from "react";
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";

const Header = () => {
  const isTheme = useTheme();
  const [icon, setIcon] = useState();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img src={icon} className={styles.logo} alt="Star wars" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search" exact>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not found
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;

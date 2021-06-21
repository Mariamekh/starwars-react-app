import styles from "./ChooseSide.module.css";
import PropTypes from "prop-types";
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
  useTheme,
  ThemeContext,
} from "@context/ThemeProvider";
import { useContext } from "react";

const ChooseSide = () => {
  const isTheme = useTheme();

  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
    </>
  );
};

ChooseSide.propTypes = {
  // people: PropTypes.array,
};

export default ChooseSide;

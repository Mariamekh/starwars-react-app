import styles from "./Favorite.module.css";
import icon from "./img/bookmark.svg";
import { Link } from "react-router-dom";
const Favorite = () => {
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>0</span>
        <img className={styles.icon} src={icon} />
      </Link>
    </div>
  );
};

export default Favorite;

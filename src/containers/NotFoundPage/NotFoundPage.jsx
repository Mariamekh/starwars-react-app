import { useLocation } from "react-router";
import styles from "./NotFoundPage.module.css";
import img from "./img/notfound.png";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;

import loader from "./img/loader.svg";
import "../index.css";
import styles from "./UiLoading.module.css";
const UiLoading = () => {
  return <img className={styles.loader} src={loader} alt="Loader" />;
};

export default UiLoading;

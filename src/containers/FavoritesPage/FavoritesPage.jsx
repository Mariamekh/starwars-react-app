import { useSelector } from "react-redux";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  console.log(storeData);
  return (
    <>
      favorites<h1>favs</h1>
    </>
  );
};

export default FavoritesPage;

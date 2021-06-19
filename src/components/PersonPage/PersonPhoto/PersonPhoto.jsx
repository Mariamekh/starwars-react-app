import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from "../../../store/actions";
import styles from "./PersonPhoto.module.css";
import iconFavorite from "./img/remove.svg";
import iconFavoriteFill from "./img/add.svg";

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: { name: personName, img: personPhoto },
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavorite : iconFavoriteFill}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
        />{" "}
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;

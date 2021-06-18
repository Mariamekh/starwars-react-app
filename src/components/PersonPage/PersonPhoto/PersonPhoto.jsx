import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from "../../../store/actions";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ personId, personPhoto, personName }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(
      setPersonToFavorite({
        [personId]: { name: personName, img: personPhoto },
      })
    );
  };
  const remove = (personI) => {
    dispatch(removePersonFromFavorite(personId));
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
};

export default PersonPhoto;

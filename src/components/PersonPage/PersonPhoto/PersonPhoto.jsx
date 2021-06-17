import PropTypes from "prop-types";

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <div>
      <img src={personPhoto} alt={personName} />
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.object,
  personName: PropTypes.string,
};

export default PersonPhoto;

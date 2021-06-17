import PropTypes from "prop-types";

const PersonInfo = ({ personInfo }) => {
  return (
    <div>
      <ul>
        {personInfo.map(({ tittle, data }, index) => {
          return (
            data && (
              <li key={index}>
                <span>
                  {tittle}: {data}
                </span>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};
export default PersonInfo;

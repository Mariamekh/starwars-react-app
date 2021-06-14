import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
 
const PeopleNavigation = ({getResource, prevPage, nextPage, countPage}) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
      <div>
          <Link to={`/people/?page=${countPage-1}`} className={styles.link}>
         <button 
          disabled={!prevPage}
          onClick={handleChangePrev}
          className={styles.buttons}>Previous</button>
          </Link>
          <Link to={`/people/?page=${countPage+1}`} className={styles.link}>
          <button 
           disabled={!nextPage}
           onClick={handleChangeNext} 
            className={styles.buttons}>Next</button>
          </Link>
      </div>
    )
}

PeopleNavigation.propTypes ={
  getResource:PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}
export default PeopleNavigation;

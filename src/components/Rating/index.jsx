import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Rating(props) {
  const value = props.value
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star.toString()}
          className={`rating__star ${
            value >= star ? 'rating__star--active' : 'rating__star--inactive'
          }`}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  )
}
export default Rating

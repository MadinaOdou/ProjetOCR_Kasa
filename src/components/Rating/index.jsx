import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Rating(props) {
  const value = props.value
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="icons">
      {stars.map((star) => (
        <span
          key={star.toString()}
          className={`icons-star ${value >= star ? 'active' : ''}`}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
    </div>
  )
}
export default Rating

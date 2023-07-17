import { Link } from 'react-router-dom'

function Card({ logement }) {
  return (
    <div>
      <Link to={'/logement/' + logement.id} className="card">
        <img
          src={logement.cover}
          alt={logement.title}
          className="card__image"
        />
        <span className="card__title">{logement.title}</span>
      </Link>
    </div>
  )
}

export default Card

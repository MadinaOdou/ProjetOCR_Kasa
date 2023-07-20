import Slideshow from '../../components/Slideshow'
import Error from '../Error/'
import LogementsList from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import { useParams } from 'react-router-dom'
import './index.scss'

function Logement() {
  const { id } = useParams()
  const logement = LogementsList.find((item) => item.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <div className="main-container">
      <Slideshow pictures={logement.pictures} />
      <div className="logement">
        <div className="logement-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="logement-tags">
          {logement.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="logement-host">
          <h2>{logement.host.name}</h2>
          <img src={logement.host.picture} alt="Hôte" />
        </div>
        <Rating value={logement.rating} />
        <div className="logement-collapse">
          <Collapse title={'Description'} text={logement.description} />
          <Collapse
            title={'Équipements'}
            text={logement.equipments.map((equipment, index) => (
              <span key={index}>{equipment}</span>
            ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Logement

import Slideshow from '../../components/Slideshow'
import Error from '../Error/'
import LogementsList from '../../data/logements.json'
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
    </div>
  )
}

export default Logement

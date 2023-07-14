import { useParams } from 'react-router-dom'

function Logement() {
  const { pageNumber } = useParams()
  return (
    <div>
      <div>Page de logement</div>
    </div>
  )
}

export default Logement

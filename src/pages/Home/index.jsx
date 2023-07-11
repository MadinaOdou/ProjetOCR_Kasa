import LogementsCards from '../../data/logements.json'
import Card from '../../components/Card'

function Home() {
  return (
    <div>
      <div>Page d'accueil 🏡</div>
      {LogementsCards.map((logement, index) => (
        <Card
          key={`${logement.id}`}
          title={logement.title}
          picture={logement.picture}
        />
      ))}
    </div>
  )
}

export default Home

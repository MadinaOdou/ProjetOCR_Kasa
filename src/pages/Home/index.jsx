import Banner from '../../components/Banner'
import LogementsCards from '../../data/logements.json'
import Card from '../../components/Card'

function Home() {
  return (
    <div className="main-container">
      <Banner />
      <div className="cards">
        {LogementsCards.map((logement, index) => (
          <Card key={index} logement={logement} />
        ))}
      </div>
    </div>
  )
}

export default Home

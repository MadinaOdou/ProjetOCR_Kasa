import Banner from '../../components/Banner'
import LogementsCards from '../../data/logements.json'
import Card from '../../components/Card'
import image from '../../assets/images/cover-home.png'

function Home() {
  return (
    <div className="main-container">
      <Banner
        imageSrc={image}
        imageAlt={'Roches au bord de la mer'}
        text={'Chez vous, partout et ailleurs'}
      />
      <div className="cards">
        {LogementsCards.map((logement, index) => (
          <Card key={index} logement={logement} />
        ))}
      </div>
    </div>
  )
}

export default Home

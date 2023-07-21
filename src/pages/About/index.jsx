import Banner from '../../components/Banner'
import image from '../../assets/images/cover-about.png'
import Collapse from '../../components/Collapse'
import CollapseList from '../../data/collapses.json'
import './index.scss'

function About() {
  return (
    <div className="main-container">
      <div className="banner-about">
        <Banner
          imageSrc={image}
          imageAlt={'Une rivière coulant entre des montagnes enneigées'}
          text={''}
        />
      </div>
      <div className="collapse-about">
        {CollapseList.map((item) => (
          <Collapse key={item.id} title={item.title} text={item.description} />
        ))}
      </div>
    </div>
  )
}

export default About

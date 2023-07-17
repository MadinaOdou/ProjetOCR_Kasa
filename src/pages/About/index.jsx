import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import image from '../../assets/images/cover-about.png'

function About() {
  return (
    <div className="main-container">
      <Banner
        imageSrc={image}
        imageAlt={'Une rivière coulant entre des montagnes enneigées'}
        text={''}
      />
      <Collapse />
    </div>
  )
}

export default About

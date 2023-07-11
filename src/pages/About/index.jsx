import { useParams } from 'react-router-dom'

function About() {
  const { pageNumber } = useParams()
  return (
    <div>
      <div>Page à propos</div>
      <div>Page {pageNumber}</div>
    </div>
  )
}

export default About

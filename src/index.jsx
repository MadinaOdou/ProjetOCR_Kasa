import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  font-family: Montserrat, sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #FF6060;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  </React.StrictMode>
)

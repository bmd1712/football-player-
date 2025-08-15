import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Comments from './components/Comments/Comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Comments/>
    </>
  )
}

export default App

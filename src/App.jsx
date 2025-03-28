import React from 'react'
import Nav from './components/Nav'
import WebinarBanner from './components/WebinarBanner'
import LimitedSeatsSection from './components/LimitedSeatsSection'
import MasterclassHighlights from './components/MasterclassHighlights'
import CoachIntroSection from './components/CoachIntroSection'
import FinalCallToAction from './components/FinalCallToAction'
import WhoIsItForAndBonuses from './components/WhoIsItForAndBonuses'
const App = () => {
  return (
    <div>
      <Nav />
      <WebinarBanner />
      <LimitedSeatsSection />
      <CoachIntroSection />
      <MasterclassHighlights />
      <WhoIsItForAndBonuses />
      <FinalCallToAction />
      
    </div>
  )
}

export default App

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Section from './home_components/Section'
 
const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <Section
      description={'Upcoming Launch'}
      title={'Starlink Mission'}
      buttonText={'watch'}
      bgImage={'starlink-mission_2.jpg'}
      link={''}
      />
      <Section
      description={'Upcoming Launch'}
      title={'Starlink Mission'}
      buttonText={'watch'}
      bgImage={'starlink-mission.jpg'}
      link={''}
      />
      <Section
      description={'Recent Launch'}
      title={'PSN Satria Mission'}
      buttonText={'rewatch'}
      bgImage={'psn-satria-mission.jpg'}
      link={'https://www.youtube.com/watch?v=4fEMCn2L3OY'}
      />
      <Section
      description={'Recent Launch'}
      title={'Transporter-8 Mission'}
      buttonText={'rewatch'}
      bgImage={'transporter-8-mission.jpg'}
      link={'https://www.youtube.com/watch?v=zO3luySkHQU'}
      />
      <Section
      description={'Recent Launch'}
      title={'CRS-28 Mission'}
      buttonText={'rewatch'}
      bgImage={'crs-28-mission.jpg'}
      link={'https://www.youtube.com/watch?v=Umx-gjHAXsc'}
      />
      <Section
      description={'Completed Mission'}
      title={'AX-2 Mission'}
      buttonText={'rewatch'}
      bgImage={'ax-2-mission.jpg'}
      link={'https://www.youtube.com/watch?v=9ekFE2RxBMI'}
      />
      <Section
      description={''}
      title={'Starship Flight Test'}
      buttonText={'rewatch'}
      bgImage={'starship-flight-test.jpg'}
      link={'https://www.youtube.com/watch?v=_krgcofiM6M'}
      />
      <Footer/>
    </div>
  )
}

export default Home

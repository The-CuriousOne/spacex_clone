import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Section_1 from '../page_components/Section_1';
import Section_2 from '../page_components/Section_2';
import Section_3 from '../page_components/Section_3';
import Section_2_starship from '../starship_pages/Section_2_starship';
import Section_3_starship from '../starship_pages/Section_3_starship';
import Section_5 from '../page_components/Section_5';
import Section_6 from '../page_components/Section_6';
import Section_7 from '../page_components/Section_7';
import Section_8 from '../page_components/Section_8';
import Section_4_dragon from '../dragon_pages/Section_4_dragon';

const Starship = () => {
  return (
    <div className="Starship">
      <Header/>
      <Section_1
      title={"Starship"}
      description={"SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND"}
      bgImage={"starship/starship_section1.jpg"}/>
      <Section_2_starship
      videoLink={"starship/starship_overview.mp4"}
      bgImage2={"starship/starship_slider2.jpg"}
      bgImage3={"starship/starship_slider3.jpg"}
      bgImage4={"starship/starship_slider4.jpg"}
      title1={"Starship"}
      slider1_desc={"SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable."}
      height1={"120"}
      pheight1={"394"}
      diameter1={"9"}
      pdiameter1={"29.5"}
      pcmass1={"100-150"}
      title2={"Starship"}
      slider2_desc={"Starship is the fully reusable spacecraft and second stage of the Starship system. The vehicle comes in several different configurations, offers an integrated payload section and is capable of carrying crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is also capable of point-to-point transport on Earth, enabling travel to anywhere in the world in one hour or less."}
      height2={"50"}
      pheight2={"164"}
      diameter2={"9"}
      pdiameter2={"29.5"}
      pcap2={"1,00"}
      ppcap2={"2.6"}
      thrust2={"1,500"}
      pthrust2={"3.3"}
      pcmass2={"100-150"}
      title3={"Super Heavy"}
      slider3_desc={"Super Heavy is the first stage, or booster, of the Starship launch system. Powered by 33 Raptor engines using sub-cooled liquid methane (CH4) and liquid oxygen (LOX), Super Heavy is fully reusable and will re-enter Earth’s atmosphere to land back at the launch site."}
      height3={"69"}
      pheight3={"226"}
      diameter3={"9"}
      pdiameter3={"29.5"}
      pcap3={"3,400"}
      ppcap3={"7.5"}
      thrust3={"7,590"}
      pthrust3={"16.7"}
      title4={"Raptor Engines"}
      engine1={"Raptor"}
      engine2={"Raptor Vacuum (RVAC)"}
      slider4_desc={"The Raptor engine is a reusable methane-oxygen staged-combustion engine that powers the Starship system and has twice the thrust of the Falcon 9 Merlin engine. Starship will be powered by six engines, three Raptor engines, and three Raptor Vacuum (RVac) engines, which are designed for use in the vacuum of space. Super Heavy will be powered by 33 Raptor engines, with 13 in the center and the remaining 20 around the perimeter of the booster’s aft end."}
      diameter4={"1.3"}
      pdiameter4={"4.2"}
      height4={"3.1"}
      pheight4={"10.2"}
      thrust4={"230"}
      pthrust4={"507"}
      />
      <Section_3_starship
      bgImage={"starship/starship_videobck.jpg"}/>
      <Footer/>
    </div>
  )
}

export default Starship

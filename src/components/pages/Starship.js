/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Section_1 from '../page_components/Section_1';
import Section_2_starship from '../starship_pages/Section_2_starship';
import Section_3_starship from '../starship_pages/Section_3_starship';
import Section_4_starship from '../starship_pages/Section_4_starship';
import Section_5_starship from '../starship_pages/Section_5_starship';
import Section_6_starship from '../starship_pages/Section_6_starship';

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
      <Section_4_starship
      bgImage1={"starship/slider1.jpg"}
      bgImage2={"starship/slider2.jpg"}
      bgImage3={"starship/slider3.jpg"}
      bgImage4={"starship/slider4.jpg"}
      bgImage5={"starship/slider5.jpg"}
      slider1_title1={"Starship"}
      slider1_title2={"Capabilities"}
      slider1_desc={"As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth."}
      slider2_title1={"Payload"}
      slider2_title2={"Delivery"}
      slider2_desc={"Starship is designed to deliver payloads farther and at a lower marginal cost per launch than our current Falcon vehicles. With a payload compartment larger than any fairing currently in operation or development, Starship will enable transport of many satellites, large space telescopes, and significant amounts of cargo to Earth orbit, the Moon, Mars and beyond."}
      slider3_title1={"Moon"}
      slider3_title2={"Missions"}
      slider3_desc={"Developing a Moon base to support future space exploration requires the transport of large amounts of cargo to the surface of the Moon. Starship is designed to carry these building blocks, further enabling research and human spaceflight development. SpaceX is providing the lunar lander which will return astronauts to the Moon’s surface for the first time in 50 years under NASA's Artemis missions."}
      slider4_title1={"Interplanatery"}
      slider4_title2={"Transportation"}
      slider4_desc={"Building cities on Mars will require affordable delivery of significant quantities of cargo and crew. The fully reusable Starship system uses on-orbit propellent transfer to enable the transport of up to 100 people to Mars or other distant destinations. "}
      slider5_title1={"Earth-to-earth"}
      slider5_title2={"Transportation"}
      slider5_desc={"Imagine traveling to anywhere in the world in an hour or less. With Starship and Super Heavy, most international trips could be completed in under 30 minutes. In addition to vastly increased speed, one great benefit to traveling outside of Earth’s atmosphere is the lack of friction as well as turbulence and weather."}
      />
      <Section_5_starship
      bgImg={""}
      vdo={"starship/tankdoc.mp4"}
      title={"On-orbit Refueling"}
      desc={"Starship leverages tanker vehicles (essentially the Starship spacecraft minus the windows) to refill the Starship spacecraft in low-Earth orbit prior to departing for Mars. Refilling on-orbit enables the transport of up to 100 tons all the way to Mars. And if the tanker ship has high reuse capability, the primary cost is just that of the oxygen and methane, which is extremely low."}
      />
      <Section_6_starship
      bgImg={"starship/starbase.jpg"}
      title={"Starbase"}
      desc={"Development and manufacturing of Starship takes place at Starbase, one of the world’s first commercial spaceports designed for orbital missions."}
      link={"https://youtu.be/KQBVOQ79G2s"}/>
      <Footer/>
    </div>
  )
}

export default Starship

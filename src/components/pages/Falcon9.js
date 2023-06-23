import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Section_1 from '../page_components/Section_1';
import Section_2 from '../page_components/Section_2';
import Section_3 from '../page_components/Section_3';
import Section_4 from '../page_components/Section_4';
import Section_5 from '../page_components/Section_5';
import Section_6 from '../page_components/Section_6';
import Section_7 from '../page_components/Section_7';
import Section_8 from '../page_components/Section_8'; 

const Falcon9 = () => {
  return (
    <div className="Falcon9">
      <Header/>
      <Section_1
      title={'Falcon 9'}
      description={'First Orbital Class Rocket Capable of Reflight'}
      bgImage={'falcon_9/f9_section1_image.jpg'}/>
      <Section_2
      launch={233}
      landing={191}
      reflight={167}/>
      <Section_3
      bgImage={'falcon_9/f9_desc_image.jpg'}
      description={'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access. '}/>
      <Section_4
      videoLink={'falcon9/f9_overvier.mp4'}
      title={'Falcon 9'}
      bgImage1={'falcon_9/f9_first_stage.jpg'}
      bgImage2={'falcon_9/f9_interstage.jpg'}
      bgImage3={'falcon_9/f9_second_stage.jpg'}
      bgImage4={'falcon_9/f9_payload.jpg'}
      height={'70'}
      pheight={'229.6'}
      diameter={'3.7'}
      pdiameter={'12'}
      mass={'549,054'}
      pmass={'1,207,920'}
      ledmass={'22,800'}
      pledmass={'50,265'}
      gtomass={'8,300'}
      pgtomass={'18,300'}
      marsmass={'4,020'}
      pmarsmass={'8,860'}
      slider2_desc1={'Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant. '}
      slider2_desc2={'Falcon 9 generates more than 1.7 million pounds of thrust at sea level.'}
      slider3_desc1={'The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight. '}
      slider3_desc2={'Falcon 9 is equipped with four hypersonic grid fins positioned at the base of the interstage. They orient the rocket during reentry by moving the center of pressure. '}
      slider4_desc={'The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits.'}
      num_engine={'1 vacuum'}
      burn_time={'397'}
      thurst={'981'}
      pthurst={'220,500'}
      slider5_desc={'Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and SpaceX continues to recover fairings for reuse on future missions.'}
      pay_height={'13.1'}
      ppay_height={'43'}
      pay_diameter={'5.2'}
      ppay_diameter={'17.1'}
      />
      <Section_5
      bgImage={'falcon9/f9_video.jpg'}
      title={'Falcon 9 in Flight'}
      link={'https://www.youtube.com/watch?v=Z4TXCZG_NEY&t=3s'}/>
      <Section_6/>
      <Section_7
      bgImage1={'falcon_9/pic1.jpg'}
      bgImage2={'falcon_9/pic2.jpg'}
      bgImage3={'falcon_9/pic3.jpg'}
      bgImage4={'falcon_9/pic4.jpg'}
      bgImage5={'falcon_9/pic5.jpg'}
      bgImage6={'falcon_9/pic6.jpg'}
      bgImage7={'falcon_9/pic7.jpg'}
      bgImage8={'falcon_9/pic8.jpg'}
      bgImage9={'falcon_9/pic9.jpg'}
      bgImage10={'falcon_9/pic10.jpg'}
      text1={'Falcon 9 launches Dragon to the International Space Station from Launch Complex 39A'}
      text2={'Falcon 9 first and second stages after separating in flight'}
      text3={'Falcon 9 lifts off with its Iridium-5 payload'}
      text4={'Falcon 9 lands on the droneship Just Read the Instructions'}
      text5={"Close-up of Falcon 9's Merlin engines during liftoff"}
      text6={'Falcon 9 leaves a trail of light as it lifts off from Vandenberg Air Force Base'}
      text7={'Falcon 9 lifts off with Dragon for an in-flight test of the Crew Dragon abort system'}
      text8={'Falcon 9 lifts off with its Iridium-8 payload'}
      text9={'Falcon 9 with its Radarsat payload at sunset before launch'}
      text10={'Falcon 9 lands at Cape Canaveral'}/>
      <Section_8/>
      <Footer/>
    </div>
  )
}

export default Falcon9

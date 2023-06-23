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
import Section_9 from '../page_components/Section_9';

const FalconHeavy = () => {
  return (
    <div className="FalconHeavy">
      <Header/>
      <Section_1
      title={'Falcon Heavy'}
      description={'Over 5 Million Lbs of Thrust'}
      bgImage={'falcon_heavy/fheavy_section1.jpg'}/>
      <Section_2
      launch={6}
      landing={11}
      reflight={8}/>
      <Section_3
      bgImage={'falcon_heavy/fheavy_desc_image.jpg'}
      description={'Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit. '}/>
      <Section_4
      videoLink={'falcon_heavy/fheavy_overview.webm'}
      title={'Falcon Heavy'}
      bgImage1={'falcon_heavy/fheavy_first_stage.jpg'}
      bgImage2={'falcon_heavy/fheavy_interstage.jpg'}
      bgImage3={'falcon_heavy/fheavy_second_stage.jpg'}
      bgImage4={'falcon_heavy/fheavy_payload.jpg'}
      height={'70'}
      pheight={'229.6'}
      diameter={'12.2'}
      pdiameter={'39.9'}
      mass={'1,420,788'}
      pmass={'3,125,735'}
      ledmass={'63,800'}
      pledmass={'140,660'}
      gtomass={'26,700'}
      pgtomass={'58,860'}
      marsmass={'16,800'}
      pmarsmass={'37,040'}
      slider2_desc1={'Three cores make up the first stage of Falcon Heavy. The side cores, or boosters, are connected on the nosecone, the interstage, and on the octaweb. Shortly after liftoff the center core engines are throttled down. After the side cores separate, the center core engines throttle back up to full thrust. '}
      slider2_desc2={''}
      slider3_desc1={'The interstage is a composite structure that connects the center core on the first stage and second stages and holds the release and separation system.'}
      slider3_desc2={'Falcon Heavy is equipped with 12 hypersonic grid fins, four on each booster, positioned at the base of the interstage or nosecone which orients by moving the center of pressure during reentry. '}
      slider4_desc={'Falcon Heavy draws upon Falcon 9’s proven design, which minimizes stage separation events and maximizes reliability. The second-stage Merlin Vacuum Engine delivers the rocket’s payload to orbit after the main engines cut off and the first-stage cores separate. '}
      num_engine={'1'}
      burn_time={'397'}
      thurst={'981'}
      pthurst={'220,500'}
      slider5_desc={'Made of a carbon composite material, the fairing protects satellites on their way to orbit. SpaceX is recovering fairings for reuse on future missions.'}
      pay_height={'13.1'}
      ppay_height={'43'}
      pay_diameter={'5.2'}
      ppay_diameter={'17.1'}
      />
      <Section_5
      bgImage={'falcon_heavy/fheavy_video.jpg'}
      title={'Falcon Heavy First Flight'}
      link={'https://www.youtube.com/watch?v=wbSwFU6tY1c'}/>
      <Section_9/>
      <Section_6/>
      <Section_7
      bgImage1={'falcon_heavy/FH_1.jpg'}
      bgImage2={'falcon_heavy/FH_2.jpg'}
      bgImage3={'falcon_heavy/FH_3.jpg'}
      bgImage4={'falcon_heavy/FH_4.jpg'}
      bgImage5={'falcon_heavy/FH_5.jpg'}
      bgImage6={'falcon_heavy/FH_6.jpg'}
      bgImage7={'falcon_heavy/FH_7.jpg'}
      bgImage8={'falcon_heavy/FH_8.jpg'}
      bgImage9={'falcon_heavy/FH_9.jpg'}
      bgImage10={'falcon_heavy/FH_10.jpg'}
      text1={'Falcon Heavy vertical at Kennedy Space Center'}
      text2={'Falcon Heavy takes off from Pad 39A at Kennedy Space Center'}
      text3={'Falcon Heavy carries Arabsat-6A to orbit'}
      text4={"Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral"}
      text5={'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center'}
      text6={'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center'}
      text7={'All 27 Merlin engines lit on Falcon Heavy'}
      text8={'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center'}
      text9={'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center'}
      text10={"Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral"}/>
      <Section_8/>
      <Footer/>
    </div>
  )
}

export default FalconHeavy

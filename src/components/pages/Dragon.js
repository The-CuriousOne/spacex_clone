import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Section_1 from '../page_components/Section_1';
import Section_2 from '../page_components/Section_2';
import Section_3 from '../page_components/Section_3';
import Section_4_dragon from '../dragon_pages/Section_4_dragon';
import Section_5 from '../page_components/Section_5';
import Section_6_dragon from '../dragon_pages/Section_6_dragon';
import Section_7_dragon from '../dragon_pages/Section_7_dragon';
import Section_8_dragon from '../dragon_pages/Section_8_dragon';
import Section_9_dragon from '../dragon_pages/Section_9_dragon';

const Dragon = () => {
  return (
    <div className="Dragon">
      <Header/>
      <Section_1
      title={"Dragon"}
      description={"Sending Humans and Cargo into Space"}
      bgImage={"dragon/dragon_section1.jpg"}/>
      <Section_2
      launch={41}
      landing={36}
      reflight={18}/>
      <Section_3
      bgImage={'dragon/dragon_desc_image.jpg'}
      description={'The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station. '}/>
      <Section_4_dragon
      videoLink={'dragon/dragon_overview.mp4'}
      title={'Dragon'}
      bgImage1={'dragon/dragon_trunk.jpg'}
      bgImage2={'dragon/dragon_capsule.jpg'}
      height={'81.1'}
      pheight={'26.7'}
      diameter={'4'}
      pdiameter={'13'}
      cvolume={'9.3'}
      pcvolume={'328'}
      tvolume={'37'}
      ptvolume={'1300'}
      lpmass={'6,000'}
      plpmass={'13,228'}
      rpmass={'3,020'}
      prpmass={'6,614'}
      slider2_desc1={'Dragon’s trunk not only carries unpressurized cargo but also supports the spacecraft during ascent. One half of the trunk is covered in solar panels that provide power to Dragon during flight and while on-station. The trunk remains attached to Dragon until shortly before reentry into Earth’s atmosphere.'}
      slider2_volume={'37'}
      slider2_pvolume={'1300'}
      slider3_desc1={'The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.'}
      slider3_volume={'9.3'}
      slider3_pvolume={'328'}
      />
      <Section_5
      bgImage={'dragon/dragon_video.jpg'}
      title={'Crew Dragon Interior'}
      link={'https://youtu.be/78ATfCaBn6E'}/>
      <Section_6_dragon/>
      <Section_7_dragon/>
      <Section_8_dragon/>
      <Section_9_dragon
      bgImage1={'dragon/pic1.jpg'}
      bgImage2={'dragon/pic2.jpg'}
      bgImage3={'dragon/pic3.jpg'}
      bgImage4={'dragon/pic4.jpg'}
      bgImage5={'dragon/pic5.jpg'}
      text1={'Dragon on pad at Launch Complex 39A'}
      text2={'Dragon and Falcon 9 ready for launch at Launch Complex 39A'}
      text3={'Dragon approaching the International Space Station'}
      text4={"CRS-22 approaching the International Space Station"}
      text5={"Dragon is seen against the Earth's atmosphere"}/>
      <Footer/>
    </div>
  )
}

export default Dragon

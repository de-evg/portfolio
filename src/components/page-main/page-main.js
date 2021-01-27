import React from "react";
import AboutMe from "../about-me/about-me";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const PageMain = () => {
  let parallax;
  return (
    <>    
      <main>
        <Parallax pages={5} scrolling={false} ref={(ref) => (parallax = ref)}>
          <ParallaxLayer offset={0} speed={1}>
            <section
              className="main-section"
              id={"logo"}
              onClick={() => parallax.scrollTo(1)}
            >
              <Logo />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={1}            
            onClick={() => parallax.scrollTo(2)}
          >
            <section className="main-section">
              <AboutMe />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            onClick={() => parallax.scrollTo(3)}
          >
            <section className="main-section">
              <Services />
            </section>
          </ParallaxLayer>

          <ParallaxLayer              
            factor={5000}      
            offset={3}
            speed={1}
            onClick={() => parallax.scrollTo(4)}
          >
            <section className="main-section">
              <Works />
            </section>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={1} onClick={() => parallax.scrollTo(0)}>
            <section className="main-section">
              <Contacts />
            </section>            
          </ParallaxLayer>          
        </Parallax>        
      </main>
    </>
  );
};

export default PageMain;

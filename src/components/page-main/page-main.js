import React, {useState, useEffect} from "react";
import AboutMe from "../about-me/about-me";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";
import { Controller, Scene } from "react-scrollmagic";

const PageMain = () => {
  const scene = {
    pin: true,
    triggerHook: 0,
    reverse: true,
  };

  const [scrollDirection, setDirection] = useState(false);
  const [lastScrollCoord, setScrollCoord] = useState(false);

  const handleScroll = (evt) => {
    const currentScrollCoord = evt.target.scrollY;
    const isDirectionChanged = currentScrollCoord < lastScrollCoord;
    setScrollCoord(currentScrollCoord);
    isDirectionChanged && setDirection(isDirectionChanged);
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true);
    return document.removeEventListener('scroll', handleScroll);
  })
  
  return (
    <>
      <main>
        <Controller>
          <Scene {...scene} duration={100} pushFollowers={true}>
            <section className="main-section" id={"logo"}>
              <Logo />
            </section>
          </Scene>
          <Scene {...scene}  duration={1000} pushFollowers={true}>
            <section className="main-section">
              <AboutMe />
            </section>
          </Scene>
          <Scene {...scene}  duration={1000} pushFollowers={false}>
            <section className="main-section">
              <Services />
            </section>
          </Scene>
          <Scene {...scene}  duration={1000} pushFollowers={false}>
            <section className="main-section">
              <Works />
            </section>
          </Scene>
          <Scene {...scene}  duration={50} pushFollowers={false}>
            <section className="main-section">
              <Contacts />
            </section>
          </Scene>
        </Controller>
      </main>      
    </>
  );
};

export default PageMain;

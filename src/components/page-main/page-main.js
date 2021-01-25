import React, { useState, useCallback, useEffect } from "react";
import AboutMe from "../about-me/about-me";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";

const DEFAULT_PAGE = 1;
const ScreenNameSpace = {
  LOGO: `LOGO`,
  ABOUT_ME: `ABOUT_ME`,
  SERVICES: `SERVICES`,
  WORKS: `WORKS`,
  CONTACTS: `CONTACTS`,
};

const mapScreen = {
  LOGO: 1,
  ABOUT_ME: 2,
  SERVICES: 3,
  WORKS: 4,
  CONTACTS: 5,
};

const PageMain = () => {
  const [screen, setScreenNumber] = useState(DEFAULT_PAGE);
  const handleScroll = useCallback(
    () => {
      setScreenNumber(screen + 1);
    },
    [screen],
  )
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]);

  return (
    <>
      <main>
        <section className="main-section">
          {screen === mapScreen[ScreenNameSpace.LOGO] && <Logo />}
          {screen === mapScreen[ScreenNameSpace.ABOUT_ME] && <AboutMe />}
          {screen === mapScreen[ScreenNameSpace.SERVICES] && <Services />}
          {screen === mapScreen[ScreenNameSpace.WORKS] && <Works />}
          {screen === mapScreen[ScreenNameSpace.CONTACTS] && <Contacts />}
        </section>
      </main>
      <footer className="page-footer visually-hidden">
        <div className="wrapper page-footer__container">
          <a className="page-footer__link-to-top" href="/">
            Back to top
          </a>
          <p className="page-footer__year">© 2021</p>
        </div>
      </footer>
    </>
  );
};

export default PageMain;

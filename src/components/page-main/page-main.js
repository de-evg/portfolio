import React from "react";
import AboutMe from "../about-me/about-me";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";

const PageMain = () => {
  return (
    <>
      <main>
        <section
          className="main-section"
        >
          <Logo />
        </section>



        <section className="main-section">
          <AboutMe />
        </section>

        <section className="main-section">
          <Services />
        </section>


        <section className="main-section">
          <Works />
        </section>

        <section className="main-section">
          <Contacts />
        </section>
      </main>
    </>
  );
};

export default PageMain;

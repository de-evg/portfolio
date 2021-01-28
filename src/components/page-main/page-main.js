import React from "react";
import AboutMe from "../about-me/about-me";
import PageHeader from "../page-header/page-header";
import Contacts from "../contacts/contacts";
import Logo from "../logo/logo";
import Services from "../services/services";
import Works from "../works/wokrs";

const PageMain = () => {
  return (
    <div className="body-grid">
      <PageHeader />
      <main>
        <div className="main-section">
          <Logo />
        </div>

        <div className="main-section">
          <AboutMe />
        </div>

        <div className="main-section">
          <Services />
        </div>

        <div className="main-section">
          <Works />
        </div>

        <div className="main-section">
          <Contacts />
        </div>
      </main>
    </div>
  );
};

export default PageMain;

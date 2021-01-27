import React, {useCallback, useState} from "react";
import {Spring} from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const sentences = [{
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Perferendis esse quia, sapiente ea earum laboriosam excepturi quidem
dolorum accusantium voluptate minus? Facere perferendis amet alias
a, impedit eius ipsam voluptas.`}, {
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Perferendis esse quia, sapiente ea earum laboriosam excepturi quidem
dolorum accusantium voluptate minus? Facere perferendis amet alias
a, impedit eius ipsam voluptas.`}];

const AboutMe = () => {
  // const trail = useTrail(sentences.length, {
  //   from: {transform: "translateX(-100%)"},
  //   to: {transform: "translateX(0)"}
  // });
  const [isVisibleElement, setVisible] = useState(false);
  const handleVisible = useCallback((isVisible) => {
    setVisible(isVisible)
  }, [setVisible]);

  return (

    <div className="about-me">
      <div className="wrapper">
        <h2 className="main-section__title">About me</h2>
        <div className="about-me__container">
          <VisibilitySensor onChange={handleVisible}>
            {
              <Spring
                delay={300}
                from={{transform: "translateX(-100%)"}}
                to={{transform: isVisibleElement ? "translateX(0)" : "translateX(-100%)"}}
              >
                {
                  (props) => (
                    <p style={props} className="main-section__content about__content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis esse quia, sapiente ea earum laboriosam excepturi quidem
                      dolorum accusantium voluptate minus? Facere perferendis amet alias
                      a, impedit eius ipsam voluptas.
                    </p>
                  )
                }
              </Spring>
            }
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

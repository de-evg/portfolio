import React, { useEffect, useRef, useState } from "react";
import CardImg from "../card-img/card-img";
import CardName from "../card-name/card-name";

const WorkCard = () => {
  const nodeRef = useRef();
  const [isShow, setShowStatus] = useState(false);
  const scrollY =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  const scrollPos = scrollY + window.innerHeight;

  useEffect(() => {
    let elementPos;
    if (scrollPos) {
      elementPos = nodeRef.current.offsetTop + 400;
    }

    if (elementPos < scrollPos) {
      setShowStatus(true);
    }
  }, [scrollPos]);

  useEffect(() => {
    const handleScroll = (evt) => {
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const elementPos = nodeRef.current.offsetTop + 400;
      const scrollPos = scrollY + window.innerHeight;
      if (elementPos < scrollPos) {
        setShowStatus(true);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <li ref={nodeRef} className="main-section__list-item works-list__item">
      <CardImg in={isShow} />
      <CardName in={isShow} />
    </li>
  );
};

export default WorkCard;

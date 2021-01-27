import React from "react";

const WorkCard = () => {
  return (
    <li className="main-section__list-item works-list__item">
      
        <picture>
          <source
            media="(min-width: 960px)"
            srcSet="./img/work-img-desctop.jpg"
          />
          <source media="(min-width: 414px)" srcSet="./img/work-img414.jpg" />
          <img
            src="./img//work-img.jpg"
            width="270"
            height="280"
            alt="Превью сайта"
          />
        </picture>
      

      <a className="works-list__item-link" href="#">
        Battleship. The game
      </a>
    </li>
  );
};

export default WorkCard;

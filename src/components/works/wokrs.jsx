import React from "react";

const Works = () => {
  return (
    <div className="works">
      <div className="wrapper">
        <h2 className="main-section__title">Works</h2>
        <ul className="main-section__list works-list">
          <li className="main-section__list-item works-list__item">
            <a href="#">
              <picture>
                <source
                  media="(min-width: 960px)"
                  srcSet="./img/work-img-desctop.jpg"
                />
                <source
                  media="(min-width: 414px)"
                  srcSet="./img/work-img414.jpg"
                />
                <img
                  src="./img//work-img.jpg"
                  width="270"
                  height="280"
                  alt="Превью сайта"
                />
              </picture>
            </a>
            <a className="works-list__item-link" href="#">
              Battleship. The game
            </a>
          </li>
          <li className="main-section__list-item works-list__item">
            <a href="#">
              <picture>
                <source
                  media="(min-width: 960px)"
                  srcSet="./img/work-img-desctop.jpg"
                />
                <source
                  media="(min-width: 414px)"
                  srcSet="./img/work-img414.jpg"
                />
                <img
                  src="./img//work-img.jpg"
                  width="270"
                  height="280"
                  alt="Превью сайта"
                />
              </picture>
            </a>
            <a className="works-list__item-link" href="#">
              Battleship. The game
            </a>
          </li>
          <li className="main-section__list-item works-list__item">
            <a href="#">
              <picture>
                <source
                  media="(min-width: 960x)"
                  srcSet="./img//work-img-desctop.jpg"
                />
                <source
                  media="(min-width: 414px)"
                  srcSet="./img//work-img414.jpg"
                />
                <img
                  src="./img//work-img.jpg"
                  width="270"
                  height="280"
                  alt="Превью сайта"
                />
              </picture>
            </a>
            <a className="works-list__item-link" href="#">
              Battleship. The game
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works

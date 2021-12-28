import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Slider from "react-slick"

const SlickConfig = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1
};

import * as Styles from "./slick.module.scss"

const ReactSlick = () => (
  <>
  <div className={Styles.wrapper}>
    <Slider {...SlickConfig}>
      <div className={`${Styles.slide} ${Styles.slideA}`}>
        <StaticImage
          src="../src/images/live_photograph/live1.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>

      <div className={`${Styles.slide} ${Styles.slideB}`}>
        <StaticImage
          src="../src/images/live_photograph/live2.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>

      <div className={`${Styles.slide} ${Styles.slideC}`}>
        <StaticImage
          src="../src/images/live_photograph/live3.jpg"
          alt="hoge"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </Slider>
  </div>
  </>
)

export default ReactSlick
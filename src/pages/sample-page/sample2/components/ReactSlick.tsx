import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Slider from "react-slick"

import * as Styles from "./slick.module.scss"

const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} ${Styles.nextButton}`}
    style={{
      display: "block"
    }}
    onClick={onClick}
  />

)

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  )
}

const SlickConfig = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />
}

/* https://dev.classmethod.jp/articles/display-react-slick-arrow/ */

const ReactSlick = () => (
  <>
    <div className={Styles.wrapper}>
      <Slider {...SlickConfig}>
        <div className={Styles.slide}>
          <StaticImage
            src="../src/images/live_photograph/live1.jpg"
            alt="hoge"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>

        <div className={Styles.slide}>
          <StaticImage
            src="../src/images/live_photograph/live2.jpg"
            alt="hoge"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>

        <div className={Styles.slide}>
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

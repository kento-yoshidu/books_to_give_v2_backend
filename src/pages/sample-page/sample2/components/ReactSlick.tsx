import * as React from "react"

import Slider from "react-slick"
import SlickConfig from "./SlickConfig"

const Styles = require("./slick.module.scss")

const ReactSlick = () => (
  <div className={Styles.wrapper}>
    <Slider {...SlickConfig}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
)

export default ReactSlick
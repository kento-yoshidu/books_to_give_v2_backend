import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../scss/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTwitter,
          faFacebook,
          faInstagram
      } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const Header = () => (
  <header className={Styles.header}>
    <div className={`${Styles.headerContainer} ${Styles.wContainer}`}>

      <button className={Styles.navBtn}>
        <FontAwesomeIcon
          icon={faBars}
          color="#aaa"
        />
      </button>
    </div>
  </header>
)

export default Header
import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "./scss/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false
const Sample6 = () => (
  <div className={Styles.body}>
    <header className={Styles.header}>
      <div className={`${Styles.headerContainer} ${Styles.wContainer}`}>
          <a href="#">
            <StaticImage
              src="./images/logo.svg"
              alt="サイトアイコン"
              width={135}
              height={26}
            />
          </a>

        <button className={Styles.navBtn}>
          <FontAwesomeIcon
            icon={faBars}
            color="#aaa"
          />
        </button>
      </div>
    </header>
  </div>
)

export default Sample6
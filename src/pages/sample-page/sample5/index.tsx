import React from "react"
import { Link } from "gatsby"

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

    <section className={Styles.hero}>
      <div className={`${Styles.heroContainer} ${Styles.wContainer}`}>
        <h1>Sample Page 5</h1>
        <p>gjaorja</p>
        <Link
          to="#"
          className={Styles.btn}
        >
          無料で始める
        </Link>
      </div>
    </section>
  </div>
)

export default Sample6
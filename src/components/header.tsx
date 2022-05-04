import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Header = (): React.ReactChild => (
  <header className={Styles.header} id="header">
    <div className={Styles.wrapper}>
      <h2 className={Styles.headerSubTitle}>toriwatari</h2>
      <h1 className={Styles.headerTitle}>Portfolio Website</h1>
      <h3 className={Styles.message}>I <FontAwesomeIcon icon={faHeart} /> HTML & CSS</h3>
      <p className={Styles.text}>更新日 : <time className={Styles.time}>2022-05-04</time></p>

      <Link className={Styles.arrowContainer} to="#sec1">
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
        <div className={Styles.arrow}></div>
      </Link>
    </div>
  </header>
)

export default Header

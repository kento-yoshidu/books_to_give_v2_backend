import * as React from "react"
import { Link, graphql } from "gatsby"

/*
import Layout from "../components/layout"
import Seo from "../components/seo"
*/

const Styles = require("../styles/index.module.scss")

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index: React.VFC = () => (
    <>
      <header className={Styles.header} id="header">
        <h2 className={Styles.headerSubTitle}>toriwatari</h2>
        <h1 className={Styles.headerTitle}>Portfolio Website</h1>
        <p>更新日 : <time>2021-10-20</time></p>

        <h3 className={Styles.message}>I <FontAwesomeIcon icon={faHeart} /> HTML & CSS</h3>

        <a className={Styles.arrowContainer} href="#sec1">
          <div className={Styles.arrow}></div>
          <div className={Styles.arrow}></div>
          <div className={Styles.arrow}></div>
        </a>
      </header> 
    </>
  )

export default Index

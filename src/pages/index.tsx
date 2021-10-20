import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Styles = require("../styles/index.module.scss")

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Index: React.VFC = () => (
    <>
      <header className={Styles.header} id="header">
        <h2 className="header-sub-title">toriwatari</h2>
        <h1 className="header-title">Portfolio Web Site</h1>
        <p>更新日 : <time>2021-10-17</time></p>

        <FontAwesomeIcon icon={faHeart} />

        <a className="arrow-container" href="#sec1">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </a>
      </header> 
    </>
  )

export default Index

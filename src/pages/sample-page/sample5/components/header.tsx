import React, { useEffect } from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../scss/style.module.scss"
import * as HeaderStyles from "../scss/header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const handleClick = () => {
  document.querySelector('html')?.classList.toggle(HeaderStyles.open)
}

const Header = () => (
  <header className={HeaderStyles.header}>
    <div className={`${HeaderStyles.headerContainer} ${Styles.wContainer}`}>
      <StaticImage
        src="../images/logo.svg"
        alt="サイトロゴ"
        width={135}
        height={26}
      />

      <button
        className={HeaderStyles.navBtn}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={HeaderStyles.faBars}
          color="#aaa"
        />
        <FontAwesomeIcon
          icon={faTimes}
          color="#aaa"
          className={HeaderStyles.faTimes}
        />
      </button>

      <nav className={HeaderStyles.nav}>
        <ul>
          <li><Link to="#">ホーム</Link></li>
          <li><Link to="#">コンテンツ</Link></li>
          <li><Link to="#">問い合わせ</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
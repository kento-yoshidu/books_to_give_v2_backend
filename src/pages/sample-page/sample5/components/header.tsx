import React, { useEffect } from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "../scss/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const handleClick = () => {
  document.querySelector('html')?.classList.toggle(Styles.open)
}

const Header = () => (
  <header className={Styles.header}>
    <div className={`${Styles.headerContainer} ${Styles.wContainer}`}>
      <StaticImage
        src="../images/logo.svg"
        alt="サイトロゴ"
        width={135}
        height={26}
      />

      <button
        className={Styles.navBtn}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faBars}
          color="#aaa"
        />
      </button>

      <nav className={Styles.nav}>
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
import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "../scss/style.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter,
          faFacebook,
          faInstagram
      } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

export const Footer = () => (
  <footer className={Styles.footer}>
    <div className={`${Styles.footerContainer} ${Styles.wContainer}`}>
      <div className={Styles.footerSite}>
        <a href="#">
          <StaticImage
            src="../images/logo.svg"
            alt="サイトロゴ"
            width={135}
            height={26}
          />
        </a>
      </div>

      <ul className={Styles.footerSns}>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faTwitter}
            />
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
            />
          </a>
        </li>
      </ul>

      <ul className={Styles.footerMenu}>
        <li><a href="#">会社概要</a></li>
        <li><a href="#">会社概要</a></li>
        <li><a href="#">会社概要</a></li>
        <li><a href="#">会社概要</a></li>
        <li><a href="#">会社概要</a></li>
      </ul>

      <div className={Styles.footerCopy}>
        @ toriwatari
      </div>
    </div>
  </footer>

)
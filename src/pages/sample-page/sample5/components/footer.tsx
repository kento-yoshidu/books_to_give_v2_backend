import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "../scss/style.module.scss"
import * as FooterStyles from "../scss/footer.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter,
          faFacebook,
          faInstagram
      } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

const Footer = () => (
  <footer className={FooterStyles.footer}>
    <div className={`${FooterStyles.footerContainer} ${Styles.wContainer}`}>
      <div className={FooterStyles.footerSite}>
        <a href="#">
          <StaticImage
            src="../images/logo.svg"
            alt="サイトロゴ"
            width={135}
            height={26}
          />
        </a>
      </div>

      <ul className={FooterStyles.footerSns}>
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

      <ul className={FooterStyles.footerMenu}>
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

export default Footer
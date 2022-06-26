import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/samplePage.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  config,
} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

interface Props {
  path: string;
  title: string;
  text: string;
}

const SamplePage: React.VFC<Props> = ({ path, title, text }) => (
  <Link
    className={Styles.linkItem}
    to={path}
  >
    <h3 className={`${Styles.linkTitle}`}>{title}</h3>
    <FontAwesomeIcon icon={faCode} className={Styles.icon}/>
    <p className={Styles.text}>{text}</p>
  </Link>
)

export default SamplePage

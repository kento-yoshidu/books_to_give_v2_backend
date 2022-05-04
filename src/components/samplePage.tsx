import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/samplePage.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  config,
  IconProp
} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

interface Props {
  path: string;
  title: string;
  icon: IconProp;
  text: string;
}

const SamplePage: React.VFC<Props> = ({ path, title, icon, text }) => (
  <Link
    className={Styles.linkItem}
    to={`sample-page/${path}/`}
  >
    <h3 className={`${Styles.linkTitle}`}>{title}</h3>
    <FontAwesomeIcon icon={icon} className={Styles.icon}/>
    <p className={Styles.text}>{text}</p>
  </Link>
)

export default SamplePage

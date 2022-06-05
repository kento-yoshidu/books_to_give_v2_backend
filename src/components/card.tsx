import React from "react"

import * as Styles from "../styles/card.module.scss"

const Card = ({ color, num, text }: { color: string, num: string, text: string }) => (
  <div className={Styles.card}>
    <div className={Styles.percent} style={{"--color": color, "--num": num }}>
      <div className={Styles.dot}></div>
      <svg className={Styles.svg}>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className={Styles.number}>
        <p>{num}<span>%</span></p>
      </div>
    </div>

    <h2 className={Styles.text}>{text}</h2>
  </div>
)

export default Card

import React from "react"

import * as CardStyles from "../styles/card.module.scss"

const Card = ({ color, num, text }: { color: string, num: string, text: string }) => (
  <div className={`${CardStyles.card} ${CardStyles.sa} ${CardStyles.saUp}`}>
    <div className={`${CardStyles.percent} ${CardStyles.sa}`} style={{ "--color": color, "--num": num }}>
      <div className={`${CardStyles.dot} ${CardStyles.sa}`}></div>
      <svg className={CardStyles.svg}>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className={`${CardStyles.number} ${CardStyles.sa}`}>
        <p>{num}<span>%</span></p>
      </div>
    </div>

    <h2 className={CardStyles.text}>{text}</h2>
  </div>
)

export default Card

import React from "react"

import * as Styles from "../styles/App.module.scss"

type Props = {
  title: string
  url: string
  description: string
  technologies: string[]
  isOpen?: boolean
}

const App = ({ title, url, description, technologies, isOpen }: Props) => {
  return (
    <details className={Styles.details}>
      <summary className={Styles.summary}>
        <a href={url} className={Styles.title}>{title}</a>
        <p>{description}</p>
      </summary>

      <ul className={Styles.technologies}>
        {technologies.map((tech) => (
          <li key={`tech${tech}`}>⚙ {tech}</li>
        ))}
      </ul>
    </details>
  )
}

export default App

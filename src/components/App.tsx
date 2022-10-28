import React from "react"

type Props = {
  title: string
  url: string
  description: string
  technologies: string[]
}

const App = ({ title, url, description, technologies }: Props) => {
  return (
    <details>
      <summary>
        <a href={url}>{title}</a>
        <p>{description}</p>
      </summary>

      <ul>
        {technologies.map((tech) => (
          <li key={`tech${tech}`}>{tech}</li>
        ))}
      </ul>
    </details>
  )
}

export default App

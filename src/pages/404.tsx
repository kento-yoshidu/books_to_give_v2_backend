import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

interface Props {
  data: GatsbyTypes.NotFoundQuery
}

const NotFoundPage: React.VFC<Props> = () => (
  <>
    <Seo title="404: Not Found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`

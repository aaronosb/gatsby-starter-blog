import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NewsLetterPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO title={`NewsLetter | ${siteTitle}`} />
        <h1>NewsLetter</h1>
        <p>TODO</p>
      </Layout>
    )
  }
}

export default NewsLetterPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

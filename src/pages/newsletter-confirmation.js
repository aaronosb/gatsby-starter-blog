import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NewsLetterConfirmationPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} >
        <SEO title={`NewsLetter | ${siteTitle}`} />
        <h1>Thanks for Subscribing to the Newsletter!</h1>
      </Layout>
    )
  }
}

export default NewsLetterConfirmationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Profile from "../components/profile"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContributorsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} >
        <SEO title={`Contributors | ${siteTitle}`} />
        <h1>Contributors</h1>
        <hr />
        <Profile />
      </Layout>
    )
  }
}

export default ContributorsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

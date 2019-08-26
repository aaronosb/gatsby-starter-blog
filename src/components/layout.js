import React from "react"
import { Link } from "gatsby"
import SiteNavbar from "./SiteNavbar"
import SideBar from "./SideBar"
import { rhythm, scale } from "../utils/typography"
import { Jumbotron, Button } from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    const { header, children } = this.props        
    return (
        <div id="page-container">
          <div id="content-wrap">
            <div className="container">
                <SiteNavbar />
                {header != null && header}
            </div>
            <main role="main" className="container">
              <div className="row">
                <div className="col-md-8 blog-main">
                  {children}
                </div>
                <SideBar />
              </div>
            </main>     
          </div>
          <footer id="footer" className="blog-footer">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>      
    )
  }
}

export default Layout

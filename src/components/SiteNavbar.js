import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const SiteNavbar = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-6 pt-1">
              <Link className="blog-header-logo text-dark" to="/">The Serverless Blog</Link>
            </div>
            <div className="col-2 text-center">
              
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#">Subscribe</a>
            </div>
          </div>
        </header>

        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            <Link className="p-2 text-muted" to="/articles">Articles</Link>
            <Link className="p-2 text-muted" to="/contributors">Contributors</Link>
            <Link className="p-2 text-muted" to="/newsletter">Newsletter</Link>
            <Link className="p-2 text-muted" to="/resources">Resources</Link>
            <Link className="p-2 text-muted" to="/contact">Contact</Link>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default SiteNavbar
import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'

const SideBar = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
          <h4 className="font-italic">About</h4>
          <p className="mb-0">A place to learn about serverless, starting with the basics of what serverless is to advanced serverless design patterns.</p>
        </div>

        <div className="p-3">
          <h4 className="font-italic">Popular Posts</h4>
          <ol className="list-unstyled mb-0">
            <li><Link href="/building-this-site">Building this Site</Link></li>
          </ol>
        </div>

        <div className="p-3">
          <h4 className="font-italic">Categories</h4>
          <ol className="list-unstyled">
            <li><a href="#">Intro to Serverless</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Design Patterns</a></li>
          </ol>
        </div>
      </aside>
    )
  }
}

export default SideBar
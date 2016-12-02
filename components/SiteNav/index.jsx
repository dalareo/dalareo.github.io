import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Artículos
                  </Link>
                </li>
                <li>
                  <Link to="/projects/" className={ location.pathname === prefixLink('/projects/') ? "current" : null }> Proyectos
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className={ location.pathname === prefixLink('/about/') ? "current" : null }> Sobre mí
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav

import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'

const DisqusThread = require('react-disqus-thread')

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
        <div>
          <Link className='gohome' to={ prefixLink('/') }> Todos los artículos
          </Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <div className='date-published'>
                    <em>Publicado { moment(post.date).format('D MMM YYYY') }</em>
                  </div>
                  </div>
                <div className='footer'>
                  <ReadNext post={ post } {...this.props}/>
                  <a className="resp-sharing-button__link" href= {`https://facebook.com/sharer/sharer.php?u=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Facebook">
                    <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                    </div>Share on Facebook</div>
                  </a>
                  <a className="resp-sharing-button__link" href= {`https://twitter.com/intent/tweet/?text=${ post.title };url=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Twitter">
                    <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                    </div>Share on Twitter</div>
                  </a>
                  <hr></hr>
                  <p>
                    { config.siteDescr }
                    <a href={ config.siteTwitterUrl }>
                      <br></br> <strong>{ config.siteAuthor }</strong> en Twitter</a>
                  </p>
                  <DisqusThread
                    shortname="dalareo"
                    title={post.title}
                    url={`https://dalareo.github.io${this.props.location.pathname}`}
                  />
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost

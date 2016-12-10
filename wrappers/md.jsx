import React from 'react'
import DocumentTitle from 'react-document-title'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import { config } from 'config'

const DisqusThread = require('react-disqus-thread')

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout != 'page') {
            template = <SitePost {...this.props}/>
        } else {
            template = <SitePage {...this.props}/>
        }

        return (
            <DocumentTitle title={ `${post.title} - ${config.siteTitle}` }>
              <div>
                { template }
              </div>
              <DisqusThread>
                shortname="dalareo"
                title={post.title}
                url={`https://dalareo.github.io${this.props.location.pathname}`}
              </DisqusThread>
            </DocumentTitle>
            );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper

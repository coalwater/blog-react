import React, { Component } from 'react';

class PostPreview extends Component {
  render() {
    return(
      <div>
        <div className="post-preview">
          <a href={this.props.post_url}>
            <h2 className="post-title">
              {this.props.title}
            </h2>
            <h3 className="post-subtitle">
              {this.props.subtitle}
            </h3>
          </a>
          <p className="post-meta">Posted by <a href="{this.props.author_url}">{this.props.author_name}</a> on {this.props.post_date}</p>
        </div>
        <hr />
      </div>
    )
  }
}
export default PostPreview;

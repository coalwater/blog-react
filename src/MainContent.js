import React, { Component } from 'react';
import PostPreview from './PostPreview';
import $ from 'jquery'

class MainContent extends Component {
  constructor() {
    super();

    this.state = {
      comments: []
    }
  }

  _getPosts() {
    $.ajax({
      method: 'GET',
      url: 'http://blog-api-test.abushady.com/posts',
      success: (comments) => {
        this.setState({ comments })
      }
    });
  }

  componentWillMount() {
    this._getPosts();
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {
              this.state.comments.map((comment) => {
                return(
                  <PostPreview
                    post_url='my_post.html'
                    title={comment.title}
                    subtitle='And this is the subtitle for the working post'
                    author_url='some_author.html'
                    post_date='February 5, 2016'
                    key={"post-"+comment.uuid}
                  />
                )
              })
            }
            {/* Pager */}

            <ul className="pager">
              <li className="next">
                <a href="#">Older Posts &rarr;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent;

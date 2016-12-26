import React, { Component } from 'react';
import PostPreview from './PostPreview';

class MainContent extends Component {
  render() {
    return(
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <PostPreview
                post_url='my_post.html'
                title='This is finally a working post'
                subtitle='And this is the subtitle for the working post'
                author_url='some_author.html'
                post_date='February 5, 2016'
              />
              <PostPreview
                post_url='my_post.html'
                title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                author_url='some_author.html'
                post_date='February 10, 2016'
              />
              <PostPreview
                post_url='my_post.html'
                title='Science has not yet mastered prophecy'
                subtitle='We predict too much for the next year and yet far too little for the next ten.'
                author_url='some_author.html'
                post_date='February 15, 2016'
              />
              <PostPreview
                post_url='my_post.html'
                title='Failure is not an option.'
                subtitle='Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
                author_url='some_author.html'
                post_date='February 15, 2016'
              />
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

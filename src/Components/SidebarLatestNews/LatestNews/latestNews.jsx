import React from 'react';
import './latestNews.css';

function LatestNews(props) {
  return (
    <div className="latestNews">
      <div className="latestNews__name">
        <div className="latestNews__name-item">
          <div className="latestNews__name-img">
            <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
          </div>
          <div className="latestNews__name-name">
            <p>{props.name}</p>
          </div>
        </div>
        <button className="latestNews__name-butto">follow</button>
      </div>
      <div className="latestNews__post">
        <div className="latestNews__post-header">
          <a href="/">{props.postName}</a>
        </div>
        <div className="latestNews__post-info">
          <p>{props.postInfo}</p>
        </div>
      </div>
    </div>
  );
}
export default LatestNews;

import React from 'react';
import LatestNews from './LatestNews/latestNews';
import './sidebarLatestNews.css';

function SidebarLatestNews() {
  return (
    <div className="sidebarLatestNews">
      <div className="sidebarLatestNews__header">
        <h2>Latest news</h2>
      </div>
      <div className="sidebarLatestNews__inner">
        <LatestNews 
          name='Andrey'
          postName="title"
          postInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum sint eveniet"
        />
        <LatestNews 
          name='Vika'
          postName="title"
          postInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <LatestNews 
          name='Arsen'
          postName="title"
          postInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. app test"
        />
      </div>
    </div>
  );
}
export default SidebarLatestNews;

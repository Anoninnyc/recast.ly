var Search = (props) => {

  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyPress={() => window.slowYouTube({key: window.YOUTUBE_API_KEY, query: document.getElementsByClassName('form-control')[0].value, max: 10}, data => props.search({currentVideo: data[0], videoData: data }))} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

var searchYouTube = ({key, query, max}, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=${max}&q=${query}&key=${key}`, (data)=>{
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
window.slowYouTube = _.debounce(searchYouTube, 500);
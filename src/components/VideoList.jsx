var VideoList = (props) => {

 
  // var onListItemClick = (event) => {
  //   console.log('hello');
  //   props.changeVideo(event);
  // };


  return (
    <div className="video-list media">
      {props.videos.map(videoEntry => <VideoListEntry video={videoEntry} changeVideo={props.changeVideo}/>)}
    </div>

  );

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


class App extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = { 
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  changeVideo(videoObj) {
    this.setState( {
      currentVideo: videoObj
    });
  } 

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos= {this.state.videoData} changeVideo={this.changeVideo.bind(this)} />
      </div>
    </div>
  );

  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


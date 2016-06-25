
class App extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = { 
      videoData: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.onSearch('react');
  }

  onSearch(query) {
    var that = this;
    var fn = this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: query, max: 10}, (data) => {
      that.setState({
        videoData: data,
        currentVideo: data[0]
      });
    });
  }

  changeAppState(object) {
    this.setState(object);
  }

  throttledSearch(query) {
    console.log('test');
    var slower = _.throttle(() => {
      this.onSearch(query);
    }, 5000);
  }

  changeVideo(videoObj) {
    this.setState( {
      currentVideo: videoObj
    });
  } 


  render() {
    return (
    <div>
      <Nav search={this.changeAppState.bind(this)} />
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

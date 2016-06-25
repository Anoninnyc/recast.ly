
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




// // A class component can be defined as an ES6 class
// // that extends the base Component class included in the React library
// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0]
      // clicked: false
    };

  }
  
  onVideoEntryClick(video) {
    console.log('hello');
    this.setState({
      currentVideo: video
      // clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={window.exampleVideoData} 
              onVideoEntryClick={this.onVideoEntryClick.bind(this)} 
            />
          </div>
        </div>
      </div>
    );
  }  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

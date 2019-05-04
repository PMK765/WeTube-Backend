
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
const player_width = '100%';
const player_height = '100%';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    const chatScript = document.createElement("script");
    chatScript.src="./chat-utils.js";
    chatScript.async = true;
    document.body.appendChild(chatScript);
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (

      <Container className ="mainContainer" fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
        <Row  className ="header">
          <Col>
          <h1 className = "title"> Welcome to WeTube!</h1>
          </Col>
        </Row>
        <Row className = "video_groups">
          <Col className = "group_window" style={styles.player} xs="2">
          <div className ="search_area">
             <form className = "video_search" fluid={false}>
             <input type="text" className="resizedTextbox" fluid={false} name="name" defaultValue="Search for video to add to playlist"></input>
             <button type="submit"><i class="fa fa-search"></i></button>
             </form>
          </div>
          <div className ="action_buttons"> 
          <button className= "playlist_button"type="button">Playlist</button>
          <button className= "login_button"  type="button">Login</button>
          <button className= "groups_button"  type="button">Groups</button>
          <button className= "users_button"  type="button">Users</button>
          </div>
          </Col>
          
          <Col className = "video_window" style={styles.player} xs="10">
          <ReactPlayer className ="WeTube_Player"  width={player_width} height={player_height} fluid={false} url='https://www.youtube.com/watch?v=bGqvOscmYKE' />
          </Col>
        
        </Row>
          <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-12">
                <h1 class="text-center">
                    WeTubeChat
                    <button id="clear" class="btn btn-danger" onClick = {this.alerter} >Clear</button>
                </h1>
                <div id="status"></div>
                <div class="chat">
                    <input type="text" id="username" class="form-control" placeholder="Enter Name"/>
                    <br/>
                    <textarea id="textarea" class="form-control" placeholder="Enter Message"></textarea>
                    <button id="send" class="send-message" class="btn btn-danger">Send</button>
                  </div>
              </div>
          </div>
        </div>
        <div class="card">
          <div id="messages" class="card-block">Live Comment Feed</div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js">
        </script>

      </Container>
    );
  }


}
const styles = {
  player: {
    paddingLeft: 0,
    paddingRight: 0
}
}
export default App;
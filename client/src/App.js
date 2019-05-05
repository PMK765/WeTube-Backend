
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
import Script from '@gumgum/react-script-tag';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGF0ZS10cnV0aC02In0.tt2oDrah6zuxEqsTBj_gyaLShGoA19yYfa2nGIUZFCI';

chatClient.setUser(
  {
    id: 'late-truth-6',
    name: 'Late truth',
    image: 'https://getstream.io/random_svg/?id=late-truth-6&name=Late+truth'
  },
  userToken,
);

const channel = chatClient.channel('livestream', 'spacex', {
  image: 'https://goo.gl/Zefkbx',
  name: 'WeTube',
});


const player_width = '100%';
const player_height = '100%';
const chat_width = '100%';

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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></Script>
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
        <Row style={{marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px'}} >
        <div class="container" style={{minWidth: '98vw', maxHeight:'26vh', overflowY: 'hidden', marginLeft: '0px', marginRight: '0px'}}>
          <Chat client={chatClient} theme={'livestream dark'} style={{width: '100vw'}}>
            <Channel channel={channel} Message={MessageLivestream}>
              <Window hideOnThread>
                <ChannelHeader live />
                <MessageList />
                <MessageInput Input={MessageInputSmall} focus />
              </Window>
              <Thread fullWidth />
            </Channel>
          </Chat>
        </div>
        </Row>
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
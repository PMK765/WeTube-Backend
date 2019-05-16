
import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Form, Input, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import ReactPlayer from 'react-player';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';
import YTSearch from 'youtube-api-search';
import Modal from 'react-modal';

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGF0ZS10cnV0aC02In0.tt2oDrah6zuxEqsTBj_gyaLShGoA19yYfa2nGIUZFCI';

chatClient.setUser(
  {
    id: 'late-truth-6',
    name: 'Peter Kemper',
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

Modal.setAppElement("#root");

const KEY = 'AIzaSyARgwTFLILR2yHEqAcGpGNL4Yi0h_I83yo';
var videourl = 'https://www.youtube.com/watch?v=v0Ko05isxms';
//videoContext = React.createContext('https://www.youtube.com/watch?v=v0Ko05isxms');

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    term: '',
    videos: [],
    videoID: videourl,
    data: null,
    modalIsOpen: false,
    modalLogIsOpen: false,
    modalSignUpisOpen: false,
    addGroupModalIsOpen: false,
    username: '',
    password: '',
  }
  
  this.handleSubmit = this.handleSubmit.bind(this);
  this.updateInput = this.updateInput.bind(this);
  this.updateVideo = this.updateVideo.bind(this);
  //this.videoID = this.videoID.bind(this);
}

  updateInput(event){
    this.setState({term : event.target.value})
  }
  updateVideo(data){
    this.setState({videoID: data})
  }
  handleSubmit(){
    console.log(this.state.term);
    this.searchYT(this.state.term);
  }
  searchYT = term => {
    YTSearch({key: KEY, term}, videos => {
      console.log(videos);
      this.setState({
        videos
      });
    });
  }
  
  _onFocus() {
    if (!this.state.focus) {
        this.setState({
            focus: true,
        });
    }
}

  handleChange = (e) => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  componentDidMount() {
    const chatScript = document.createElement("script");
    chatScript.src="./chat-utils.js";
    chatScript.async = true;
    document.body.appendChild(chatScript);
  }


  render() {
    return (

      <Container className ="mainContainer" fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Row  className ="header">
          <Col>
          <h1 className = "title"> Welcome to WeTube!</h1>
          </Col>
        </Row>

        <Modal
          contentLabel="Main Groups Modal"
          isOpen={this.state.modalIsOpen}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}>
          <button className="float-right" onClick={() => this.setState({ modalIsOpen: false })}>X</button>
          <div className="align-items-center">
            <Row className="justify-content-center">
              <h2>Groups Menu</h2>
            </Row>
            <Row className="justify-content-center">
              <Button onClick={() => this.setState({ addGroupModalIsOpen: true })}>Add Group</Button>
            </Row>
            <hr />
            <Row className="justify-content-center">
              <Row className="justify-content-center">
              <ListGroup>
                <h3>Groups Attending</h3>
                <ListGroupItem>Group 1 - <Button color="danger">Leave</Button></ListGroupItem>
                <ListGroupItem>Group 2 - <Button color="danger">Leave</Button></ListGroupItem>
                <ListGroupItem>Group 3 - <Button color="danger">Leave</Button></ListGroupItem>
              </ListGroup>
              </Row>
            </Row>
            <hr />
            <Row className="justify-content-center">
              
              <ListGroup>
              <h3>Groups Avaliable</h3>
                <ListGroupItem>Group 4 - <Button color="success">Join</Button></ListGroupItem>
                <ListGroupItem>Group 5 - <Button color="success">Join</Button></ListGroupItem>
                <ListGroupItem>Group 6 - <Button color="success">Join</Button></ListGroupItem>
              </ListGroup>
            </Row>
          </div>
        </Modal>

        <Modal
          contentLabel="Add Group Modal"
          isOpen={this.state.addGroupModalIsOpen}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}>
          <button className="float-right" onClick={() => this.setState({ addGroupModalIsOpen: false })}>X</button>

          <h1> Add a Group</h1>
          <Form>
            <FormGroup>
              <Input
                id="nameInput"
                type="text"
                placeholder="Enter your Name..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Who are your Members?"
              />
            </FormGroup>
            <Button>Create Group</Button>
          </Form>
        </Modal>

        <Modal 
          contentLabel="Add Signup Modal"
          isOpen={this.state.modalSignUpisOpen}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}>
          <button className="float-right" onClick={() => this.setState({ modalSignUpisOpen: false })}>X</button>
          <h1> Signup Page</h1>    
          <Form>
            <FormGroup>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id='password'
                type="text"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Signup</Button>
          </Form>
        </Modal>

        <Modal
          contentLabel="Add Login Modal"
          isOpen={this.state.modalLogIsOpen}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}>
          <button className="float-right" onClick={() => this.setState({ modalLogIsOpen: false })}>X</button>
          
          <h1> Login Page</h1>
          <Form>
            <FormGroup>
              <Input
                id="nameInput"
                type="text"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Password"
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Modal>

        <Row className = "video_groups">
          <Col className = "group_window" style={styles.player} xs="2">
          <div className ="search_area">
             <form className = "video_search"  >
             <input type="text" onChange={this.updateInput} className="resizedTextbox" name="name" placeholder="Search for video">
             </input>
             <button type="button" className="searchButton" onClick={this.handleSubmit}><i class="fa fa-search"></i></button>
             </form>
          </div>


          <div className ="action_buttons"> 
       
        
          <button className= "signup_button"type="button"onClick={() => this.setState({ modalSignUpisOpen: true })}>Sign Up</button>
          <button className= "login_button"  type="button"onClick={() => this.setState({ modalLogIsOpen: true })}>Login</button>
          <button className= "groups_button"  type="button" onClick={() => this.setState({ modalIsOpen: true })}> Groups</button>
          <button className= "users_button"  type="button">Users</button>
          </div>
          <div style={{overflowY: 'auto', marginTop: '10px', paddingTop:'10px', maxHeight:'65vh'}} className ="Search_list">
          <VideoList videos={this.state.videos} updateVideo={this.updateVideo} />
          </div>  
          

          </Col>
          

          
          <Col className = "video_window" style={styles.player} xs="10">
          <ReactPlayer className ="WeTube_Player"  width={player_width} height={player_height}  url={this.state.videoID}/>
          </Col>
        
        </Row>
        <Row style={{marginLeft: '0px', marginRight: '0px', paddingLeft: '0px', paddingRight: '0px', position: 'absolute', bottom: '0px' }} >
        <div class="container" style={{minWidth: '98vw', maxHeight:'22vh', overflowY: 'hidden', marginLeft: '0px', marginRight: '0px', position: 'absolute', bottom: '0px'}}>
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

const VideoList = (props) => {
  const videoItems = props.videos.map(video => (
      <VideoListItem
        key={video.etag}
        video={video}
        updateVideo={props.updateVideo}
        //videoID={update}
        //props={props}
        />
        
  ));

  return(
      <ul style={{listStyle: "none"}}>{videoItems}</ul>

  );
};

const VideoListItem = (props) => {
  //var data;
  return(
       
       <li style={{borderColor: "black", borderWidth: "3px"}} onClick={() => {
          console.log('https://youtube.com/watch?v=' + props.video.id.videoId);
          //props.videoID.setState('https://youtube.com/watch?v=' + props.video.id.videoId);
          props.updateVideo('https://youtube.com/watch?v=' + props.video.id.videoId);
          //this.videoID('https://youtube.com/watch?v=' + video.id.videoId);
          //videourl = ('https://youtube.com/watch?v=' + video.id.videoId);
          //videoID = 'https://youtube.com/watch?v=' + video.id.videoId
          
           }}>
           
           <img 
           style={{alignSelf: 'stretch'}}
           src = {props.video.snippet.thumbnails.medium.url}/>
           <p>{props.video.snippet.title}</p>
           <p>{props.video.snippet.channelTitle}</p>
           <p>{props.video.snippet.description}</p>
           <hr style={{color: "black", height: "10px"}}></hr>
       </li>
  );
  };
export default App;
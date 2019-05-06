import React from 'react';
//import { View, Text, Image } from 'react-native';
//function handleClick(video){
//   WeTube
//}


const VideoListItem = ({ video , videoID }) => {
    var data;
    return(
         
         <li onClick={(videoId) => {
            console.log('https://youtube.com/watch?v=' + video.id.videoId);
            //videoID.setState('https://youtube.com/watch?v=' + video.id.videoId);
            data='https://youtube.com/watch?v=' + video.id.videoId
            
        }
       
       }>
             <img 
             style={{alignSelf: 'stretch'}}
             src = {video.snippet.thumbnails.medium.url}/>
             <p>{video.snippet.title}</p>
             <p>{video.snippet.channelTitle}</p>
             <p>{video.snippet.description}</p>
             
         </li>
    );
    };

export default VideoListItem;
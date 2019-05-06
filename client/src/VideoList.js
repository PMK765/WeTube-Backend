import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, videoID}) => {
    const videoItems = videos.map(video => (
        <VideoListItem
          key={video.etag}
          video={video}
          videoID={videoID}
          />
          
    ));

    return(
        <ul style={{listStyle: "none"}}>{videoItems}</ul>
    );
};



const style = {
    containerStyle:{
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    }
}

export default VideoList;
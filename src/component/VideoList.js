import './VideoList.css';
import React from "react";
import VideoCard from './VideoCard';

const VideoList = ({ videos, onVideoSelect }) => {
    const handledVideoList = videos.map(video => {
        return <VideoCard key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    })
    return <div className="ui relaxed divided list">{handledVideoList}</div>;
}

export default VideoList;

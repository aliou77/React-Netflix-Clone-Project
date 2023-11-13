import React from 'react';
import video from '../assets/My Name - Official Trailer - Netflix.mkv'

const Video = ({classes}) => {
    return (
        <div className={
            `video` + (classes) ? `${classes}` : ''
        }>
            <video src={video} autoPlay loop controls muted></video>
        </div>
    );
}

export default Video;

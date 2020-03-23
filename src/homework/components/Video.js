import React from 'react';

const Video = props => {
    return (
        <div className="center">
            <video src = {props.source} width="400" controls />
        </div>
    )
}

export default Video;
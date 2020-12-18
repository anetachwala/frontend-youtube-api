import React, { Component } from 'react';
import './Videos.css';

export default class Videos extends Component {
    
    state = {
        loading: true,
        videos: []
    };
 
    async componentDidMount() {
        const data= require('./youtube.json');
        this.setState({ videos: data, loading: false });
    }

    render() {
        return (
            <div className="Videos">
                {this.state.videos.map(video => (          
                    <div key={video.id.videoId} className="Videos-video">
                        <a href={video.id.videoId}><img src={video.snippet.thumbnails.medium.url} /></a>
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                    </div>
                ))}
            </div>
        )
    }
}


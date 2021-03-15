import React from 'react';
import ReactPlayer from 'react-player';
import './css/video.css';
import TranslatableText from '../TranslatableText/TranslatableText';

const Video = ({video}) => {
  return (
    <>
      <div className="card video">
        <h4 className="card-header">
          <TranslatableText
            dictionary={{
              russian: 'Видео о стране',
              belarusian: 'Відэа пра краіну',
              english: 'Video about country'
            }}
          />
        </h4>
        <ReactPlayer url={video} controls={true} width="100%" height="100%" light={true} />
      </div>
    </>
  );
};

export default Video;

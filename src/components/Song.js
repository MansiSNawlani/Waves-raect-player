import React from 'react';

const Song = ({ isPlaying, currentSong }) => {
  return (
    <div className='song-container'>
      <img
        className={isPlaying ? 'playing' : ''}
        src={currentSong.cover}
        alt={currentSong.name}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;

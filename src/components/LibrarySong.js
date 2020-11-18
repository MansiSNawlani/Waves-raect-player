import React from 'react';

const LibrarySong = ({
  id,
  songs,
  song,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    // const selectedSong = songs.filter((state)=>state.id === id)
    const selectedSong = song;
     await setCurrentSong(selectedSong);
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    //console.log("select song")
    setSongs(newSongs);
    //check if song is playing
    // playAudio(isPlaying,audioRef);
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

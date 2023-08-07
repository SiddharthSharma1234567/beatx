import React, {useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../SCSS/Artist.scss";
import data from "../Data.json";
import { context_music } from "../App";

export default function Artist(props) {

  const {music,setMusic}=useContext(context_music);

  // ----------------------------------------------------------------------------------
  const { artistData } = useParams();
  const artistsArray = Object.values(data.artists);
  const singer = artistsArray.find((obj) => ":" + obj.id === artistData);
  const singerArray = Object.values(singer.songs);

  // ----------------------------------------------------------------------------------

  const [likedSongs, setLikedSongs] = useState(
    Array(singerArray.length).fill("false")
  )

  function begin(element) {
    // props.setMusic({
    //   image: element.image,
    //   name: element.name,
    //   song: element.song,
    //   duration: element.duration,
    //   played: "true",
    //   artist:singer.name,
    // });

    setMusic({
      image: element.image,
      name: element.name,
      song: element.song,
      duration: element.duration,
      played: "true",
      artist:singer.name,
    })
    props.setMusicClicked("true");
    props.setMusicPlayer("true");
  }

  const toggleLike = (index) => {
    const updatedLikedSongs = [...likedSongs];
    updatedLikedSongs[index] = !likedSongs[index];
    setLikedSongs(updatedLikedSongs);
  };

  return (
    <div id="Artist">
      <div id="info">
        <div id="container">
          <img src={singer.image} alt="arjijt" id="singer" />
        </div>
        <div id="details">
          <div id="Name">{singer.name}</div>
          <div id="song_info">
            <div>{singerArray.length} Songs</div>
            <div style={{ marginLeft: "20px" }}>*</div>
            <div style={{ marginLeft: "20px" }}>40 Minutes</div>
          </div>
          <div id="play_all">
            <div>
              <i className="fa-solid fa-play"></i>
            </div>
            <div style={{ paddingLeft: "8px" }}>Play All</div>
          </div>
        </div>
      </div>

      <div id="playlist">
        <div id="title">
          <div id="blank"></div>
          <div id="title_name">Name</div>
          <div id="title_duration">Duration</div>
          <div id="title_likes"></div>
        </div>

        <div id="body" style={{ width: "95%" }}>
          {singerArray.map((element, index) => {
            return (
              <div
                id="songs"
                onClick={
                  () => begin(element)
                }
              >
                <div id="blank">
                  <img
                    src={element.image}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "5px",
                    }}
                  ></img>
                </div>
                <div
                  id="body_name"
                >
                  {element.name}
                </div>
                <div id="body_duration">{element.duration}</div>
                <div id="title_likes">
                  {likedSongs[index] ? (
                    <i
                      className="fa-regular fa-heart"
                      style={{ color: "#ffffff" }}
                      onClick={() => toggleLike(index)}
                    />
                  ) : (
                    <i
                      className="fa-solid fa-heart"
                      style={{ color: "#ffffff" }}
                      onClick={() => toggleLike(index)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../SCSS/MusicPlayer.scss";

export default function MusicPlayer(props) {
  const [likes, setLikes] = useState("false");
  const [mute, setMute] = useState("false");
  const [val, setVal] = useState(0);

  // ----------------------------------------------------------------------------

  useEffect(() => {
    if (props.musicClicked === "true") {
      let music = document.querySelector("#music");
      let progress = document.querySelector("#progress");
      music.play();
      progress.value = 0;
      music.currentTime = 0;
      props.setMusicClicked("false");
    }
  }, [props.musicClicked]);

  useEffect(() => {
    let progress = document.querySelector("#progress");
    let music = document.querySelector("#music");
    let sound = document.querySelector("#sound_progress");

    music.onloadedmetadata = function () {
      progress.max = music.duration;
      progress.value = music.currentTime;
    };

    if (props.music.played === "true") {
      const interval = setInterval(() => {
        progress.value = music.currentTime;
      }, 500);
      return () => clearInterval(interval);
    }

    progress.onchange = () => {
      music.currentTime = progress.value;
    };

    sound.addEventListener("input", () => {
      music.volume = sound.value / 100;
      if (sound.value / 100 === 0) {
        setMute("true");
      } else {
        setMute("false");
      }
    });
  }, [props.music.played]);

  // --------------------------------------------------------------------------------

  function reload_song() {
    let progress = document.querySelector("#progress");
    let music = document.querySelector("#music");

    music.currentTime = 0;
    progress.value = 0;
  }

  const play_music = () => {
    // console.log(props.music.played);
    let music = document.querySelector("#music");
    music.play();
    props.setMusic({
      image: props.music.image,
      name: props.music.name,
      song: props.music.song,
      duration: props.music.duration,
      played: "true",
      artist: props.music.name,
    });
    // console.log(props.music.played);
  };

  // ---------------------------------------------------------------------------------------------

  const pause_music = () => {
    let music = document.querySelector("#music");
    music.pause();
    props.setMusic({
      image: props.music.image,
      name: props.music.name,
      song: props.music.song,
      duration: props.music.duration,
      played: "false",
      artist: props.music.name,
    });
  };

  const mute_speaker=()=>{
    let music = document.querySelector("#music");
    let sound = document.querySelector("#sound_progress");
    setVal(sound.value);
    setMute("true");
    sound.value=0;
    music.volume=0;
  }

  const unmute_speaker=()=>{
    let music = document.querySelector("#music");
    let sound = document.querySelector("#sound_progress");
    setMute("false");
    sound.value=val;
    music.volume=val/100;
  }

  return (
    <div
      id="music_player"
      style={
        props.musicPlayer === "true"
          ? { visibility: "visible" }
          : { visibility: "hidden" }
      }
    >
      <audio
        controls
        src={props.music.song}
        type="audio/mp3"
        id="music"
      ></audio>
      <div id="left_part">
        <div>
          <img src={props.music.image} alt={props.music.name}></img>
        </div>
        <div style={{ color: "white" }}>
          <div style={{ fontSize: "20px" }}>{props.music.name}</div>
          <div style={{ opacity: "50%" }}>{props.music.artist}</div>
        </div>
        <div id="likes">
          {likes === "false" ? (
            <i
              className="fa-regular fa-heart"
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                setLikes("true");
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-heart"
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                setLikes("false");
              }}
            ></i>
          )}
        </div>
      </div>
      <div id="middle_part">
        <div id="music_controllers">
          <div>
            <i
              className="fa-solid fa-backward"
              style={{ color: "#ffffff", cursor: "pointer" }}
              onClick={reload_song}
            ></i>
          </div>
          <div>
            {props.music.played === "false" ? (
              <i
                className="fa-solid fa-play"
                style={{ color: "#ffffff", cursor: "pointer" }}
                onClick={() => {
                  play_music();
                }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-pause"
                style={{ color: "#ffffff", cursor: "pointer" }}
                onClick={() => {
                  pause_music();
                }}
              ></i>
            )}
          </div>
          <div>
            <i className="fa-solid fa-forward" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
        <div id="music_progress">
          <input type="range" style={{ width: "70%" }} id="progress"></input>
        </div>
      </div>
      <div>
        <div id="sound_controller">
          <div>
            {mute === "false" ? (
              <i
                className="fa-solid fa-volume-high"
                style={{ color: "#ffffff",cursor:"pointer" }}
                onClick={() => {
                  mute_speaker()
                }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-volume-xmark"
                style={{ color: "#ffffff",cursor:"pointer" }}
                onClick={() => {
                  unmute_speaker()
                }}
              ></i>
            )}
          </div>
          <div style={{ marginTop: "2px" }}>
            <input
              type="range"
              max="100"
              style={{ width: "100px",cursor:"pointer" }}
              id="sound_progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

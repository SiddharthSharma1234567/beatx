import React, { useState, createContext } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Tabs/Home";
import Artist from "./Tabs/Artist";
import MusicPlayer from "./Components/MusicPlayer";

export const context_music = createContext();

function App() {
  // const [artist, setArtist] = useState([]);
  const [musicClicked, setMusicClicked] = useState("false");
  const [musicPlayer, setMusicPlayer] = useState("false");

  const [music, setMusic] = useState({
    image: "/Images/ATSH.jpg",
    name: "Agar Tum Saath Ho",
    song: "/Songs/Arijit Singh/ATSH.mp3",
    duration: "5:41",
    played: "false",
    artist: "Arijit Singh",
  });

  return (
    <div className="App">
      <BrowserRouter>
        <context_music.Provider value={{music,setMusic}}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route
            path="/artist/:artistData"
            element={
              <Artist
                music={music}
                setMusic={setMusic}
                musicClicked={musicClicked}
                setMusicClicked={setMusicClicked}
                setMusicPlayer={setMusicPlayer}
              />
            }
          ></Route> */}
            <Route
              path="/artist/:artistData"
              element={
                <Artist
                  setMusicClicked={setMusicClicked}
                  setMusicPlayer={setMusicPlayer}
                />
              }
            ></Route>
          </Routes>
          <MusicPlayer
            music={music}
            setMusic={setMusic}
            musicClicked={musicClicked}
            setMusicClicked={setMusicClicked}
            musicPlayer={musicPlayer}
          />
          {/* <context_music value={music}>
          <MusicPlayer
            musicClicked={musicClicked}
            setMusicClicked={setMusicClicked}
            musicPlayer={musicPlayer}
          />
        </context_music> */}
        </context_music.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

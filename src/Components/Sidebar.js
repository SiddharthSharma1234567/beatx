import React from "react";
import "../SCSS/Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <Link to="./" className="home">
        <div style={{ margin: "10px" }}>
          <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
        </div>
        <div className="homeText">Home</div>
      </Link>
      <div className="search">
        <div style={{ margin: "10px" }}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div style={{ margin: "5px" }}>Search</div>
      </div>
      <div className="library">
        <div className="heading">
          <div style={{ margin: "5px" }}>
            <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
          </div>
          <div style={{ margin: "10px" }}>Library</div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        <ul className="content">
          <li className="liked">
            <div style={{ margin: "5px" }}>
              <i className="fa-solid fa-heart" style={{ color: "#ffffff" }}></i>
            </div>
            <div style={{ margin: "5px" }}>Liked Songs</div>
          </li>
          {/* --------------------------------------------------------------------------------------- */}
          <li className="liked">
            <div style={{ margin: "5px" }}>
              <i className="fa-solid fa-list" style={{ color: "#ffffff" }}></i>
            </div>
            <div style={{ margin: "5px" }}>My Playlist</div>
          </li>
          {/* --------------------------------------------------------------------------------------- */}
          <li className="liked">
            <div style={{ margin: "5px" }}>
              <i className="fas fa-history" style={{ color: "#ffffff" }}></i>
            </div>
            <div
              style={{
                margin: "5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Recent Songsssssssssss
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

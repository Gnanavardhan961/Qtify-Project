import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import axios from "axios";
import styles from "./SongsSection.module.css";

function SongsSection() {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then(res => setGenres(["All", ...res.data]))
      .catch(err => console.error(err));

    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(res => setSongs(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredSongs = selectedGenre === "All" 
    ? songs 
    : songs.filter(song => song.genre === selectedGenre);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Songs</h2>
      </div>

      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        className={styles.tabs}
      >
        {genres.map((genre) => (
          <Tab 
            key={genre} 
            label={genre} 
            value={genre} 
            className={styles.tab} 
          />
        ))}
      </Tabs>

      <Carousel 
        items={filteredSongs}
        renderItem={(song) => (
          <Card
            image={song.image}
            title={song.title}
            count={song.likes}
            type="song"
          />
        )}
      />
    </div>
  );
}

export default SongsSection;

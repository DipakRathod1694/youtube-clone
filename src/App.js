import "./App.css";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({id : {}, snippet: {}})

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {data: { items: videos }} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC3v8BXGYQAIPE4X1tMm-vrZaneLDucaMQ",
        q: searchItem,
      },
    });
    
    setvideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;

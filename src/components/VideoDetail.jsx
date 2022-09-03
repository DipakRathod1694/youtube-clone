import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "40%" }}>
        <iframe
          frameBorder={0}
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <Typography varient="h4">
            <b style={{fontWeight:"800", fontSize: "20px"}}>{title} - {channelTitle}</b>
        </Typography>
        <Typography varient="subtitle1">
            {channelTitle}
        </Typography>
        <Typography varient="subtitle2">
            {description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
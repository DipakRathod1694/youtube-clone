import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <Grid item xs={12}>
            <Paper style={{ display:"flex", alignItems: "center", cursor: "pointer"}} onClick={ () => {onVideoSelect(video)}}>
                <img style={{ marginRight: "20px" }} alt="thubnail" src={video.snippet.thumbnails.medium.url}/>
            </Paper>
            <Typography varient="subtitle1">
                <b>{video.snippet.title}</b>
            </Typography>
        </Grid>
    )
}

export default VideoItem;
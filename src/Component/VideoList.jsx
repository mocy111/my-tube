 import React from 'react'
 import { Grid  } from "@material-ui/core";
import VideoItem from './VideoItem'
 function VideoList({video,onVideoSelect}) { 
const listOfVideos = video.map ((param,id) =>  <VideoItem key={id}  video = {param}  onVideoSelect={onVideoSelect} />)

     return (
         <Grid  container spacing ={8}>
             {listOfVideos} 
         </Grid>
     )  
     
 }
 
 export default VideoList
 
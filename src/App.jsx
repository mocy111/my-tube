import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import {SearchBar , VideoDetail,VideoList } from './Component'



class App extends Component {

    state ={
        video : [],
        videoSelected : null
    }

    handleSubmit = async (searchTerm ) => {
        const reponse = await youtube.get('search',{ 
        params : {
            part : 'snippet',
            maxResults :5,
            key :'AIzaSyDFsP9_nSMJLTn5h0QF29h0frHXBec1mI8',
            q: searchTerm,
        }

    });

    this.setState ({
       video : reponse.data.items,
       videoSelected : reponse.data.items[0]
    })
       console.log(reponse.data.items);
    }

    
    onVideoSelect = (video) =>{
        this.setState ({
            videoSelected : video
            
         })
         
     }
      componentDidMount() {
          this.handleSubmit('React js')
      }
      
    
    
    render() {
        
        const {videoSelected,video} = this.state

        return (
           <Grid justify="center" container spacing ={10} >
               <Grid item xs={12}>
                <Grid container spacing ={10} >
                    <Grid item xs={11}>
                   <SearchBar  onFormSubmit ={this.handleSubmit}/>
                    </Grid>
                    <Grid item xs={7}>
                   <VideoDetail video = {videoSelected} />
                    </Grid>
                    <Grid item xs={4}>
                   <VideoList video = {video}  onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                    
                </Grid>

               </Grid>

           </Grid>
        )
    }
}

export default App

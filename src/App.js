import './App.css';
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Grid style={{justifyContent: "center"}} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit = {handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* {VideoDetail} */}
          </Grid>
          <Grid item xs={4}>
            {/* {VideoList} */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem){
    const response = await youtube.get("serach",{
      part: "snippet",
      maxResults: 5,
      key: "AIzaSyC3v8BXGYQAIPE4X1tMm-vrZaneLDucaMQ",
      q: searchItem
    });
    console.log(response);
  }
}

export default App;

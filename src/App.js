
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect} from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {StartPage} from "./pages/startPage";

import {TopWszechczasoww} from "./pages/topWszechczasow";
import axios from "axios";
import {Losuj} from "./pages/losuj";

const useStyles = makeStyles({
  backgroundOfAll: {
    height:'100vh',
    background: 'linear-gradient(90deg, rgba(6,199,155,1) 2%, rgba(180,179,57,1) 22%, rgba(49,158,62,1) 44%, rgba(6,121,75,1) 57%, rgba(199,170,97,1) 80%, rgba(252,136,70,1) 97%)',
  },
  welcome: {
    fontSize: 24,
    color: 'white',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  panel:{
    background:"#020218",
  },
  buttonStart:{
    fontSize: 20,
    color: '#c4bfbf',
    fontWeight: 700,
    fontStyle: 'italic',
  },
  base: {

    background: "linear-gradient(90deg, rgba(196,191,191,1) 13%, rgba(156,156,156,1) 59%, rgba(153,153,157,1) 87%)",
    padding: 20,
  },

});

function App() {
  const [PageStan, setPageStan] = React.useState(0);
  const [listMovie, setMovieList] = React.useState([]);


  const classes = useStyles();
  const handler2=()=> {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies',
      headers: {
        'x-rapidapi-key': '18e1fe7aa4mshc18377df19cd92dp157dcajsned607484995d',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      var array= new Array(250);
      let licznik=0
   //   setMovieList(response.data)
      {response.data.map((d) => {


        array[licznik]=d.id.slice(7, (d.id.length-1))
        licznik += 1;

      })
      }
        setMovieList(array)

   // console.log(array[2].id);

      console.log(listMovie)
    }).catch(function (error) {
      console.error(error);
    });

  }


  return(
      <div className={classes.backgroundOfAll}>
        <Grid container spacing={4} justify="center"
              alignItems="stretch">
          <Grid item xs={12}>
            <text className={classes.welcome}>MOVIEPAGE</text>


          </Grid>
          <Grid item xs={12}  className={classes.panel}>

            <Button className={classes.buttonStart} onClick={()=>setPageStan(0)}>Strona główna</Button>

            <Button className={classes.buttonStart} onClick={()=>setPageStan(2)}>Top Wszechczasów</Button>
            <Button className={classes.buttonStart} onClick={()=>setPageStan(3)}>Losowy film</Button>
          </Grid>
          <Grid item   xs={12}>
            {PageStan === 0 ? (
                    <StartPage />)
                : PageStan === 2 ? (
                    <TopWszechczasoww lista={listMovie} />
                )  : PageStan === 3 ? (
                        <Losuj lista={listMovie}/>)

                    : null}
          </Grid>
          <Grid item>

            <Button onClick={handler2} className={classes.base}>pobierz dane i zacznij pracę  z bazą.  </Button>
          </Grid>


        </Grid>

      </div>

  );


}
export default App;

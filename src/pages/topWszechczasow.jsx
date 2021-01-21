import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import axios from 'axios';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({

    text: {
         fontSize: 16,
        color: '#151010',
        fontWeight: 700,

    },
    base: {

background: "linear-gradient(90deg, rgba(196,191,191,1) 13%, rgba(156,156,156,1) 59%, rgba(153,153,157,1) 87%)",
           padding: 20,
    },
    buttons:{
        background: " radial-gradient(circle, rgba(42,128,20,1) 2%, rgba(242,151,54,1) 100%)",
    }
});

  export function TopWszechczasoww(props) {
      const [mod, setMod] = React.useState(0)
      const [film, setFilm] = React.useState([]);
      const [wynik, setWynik] = React.useState()
      const classes = useStyles();
      let array2=[];
      const handleChange = (event) => {
          setMod(event.target.value);

      };


      const handler1=()=> {

      let i = 0;


      let b = 100


      while (i < b) {
          let fragment = props.lista[i];
         console.log(fragment);
          let adres = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' + fragment
          const options = {
              method: 'GET',
              url: adres,
              headers: {
                  'x-rapidapi-key': '18e1fe7aa4mshc18377df19cd92dp157dcajsned607484995d',
                  'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
              }
          };
          axios.request(options).then(function (response) {
console.log(response.data)
              array2.push(response.data)

          }).catch(function (error) {
              console.error(error);
          });
          i += 1;
        if(i==99){

            setFilm(array2)

        }
      }




  }








return(
      <Box   boxShadow={3} className={classes.base}>
        <div className={classes.text}> Tu możesz obejrzeć top 100 filmów wraz z opisami.
        </div>
          <div className={classes.text}>  niestety tu muszą zostać pobrane dane z kolejnej bazy</div>
          <div className={classes.text}> jeżeli lista nie zadziała za pierwszym razem odczekaj moment i spróbuj ponownie</div>
          <div> ___</div>
          <Grid container spacing={1}    direction="column"  alignItems="stretch">
              <Grid container direction="row" spacing={1} justify="space-around">

              <Grid item xs={10}>
                  <Grid container justify="space-around">

                  <Button onClick={handler1} >załaduj filmy - naciśnij i odczekaj kilka sekund</Button>
                  </Grid>
              </Grid>

                  <Grid item xs={12}>
                      <Button className={classes.buttons} fullWidth onClick={()=> {
let g=0
                          setWynik(film.map(movie  => {
g++
                              return (
                                  <Grid item xs={12}>
                                      <h1> {g} {movie.title}</h1>
                                      <p>{movie.plot}</p>
                                      <p>{movie.rating}</p>


                                  </Grid>
                              )
                          }))
                      }
                      }>pokaż</Button>
                  </Grid>
              </Grid>
              <Grid item xs={12}>
                  {wynik}
              </Grid>




    </Grid>

      </Box>
)}

import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect, useReducer} from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import StronaFilmu from "./stronaFilmu";
import Box from '@material-ui/core/Box';
import axios from "axios";

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
    welcome: {
        fontSize: 24,
        color: 'white',
        fontWeight: 700,
        fontStyle: 'italic',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '8%',
        maxHeight: '8%',
    },

    star:{
        color: '#987f03',
    },
    filmweb:{
        background: '#FFF',
        color: 'black',
    },
    imdb: {
        background:'yellow',
        color: 'black',
    },
    rottenTomatoes:{
        background: '#30599f',
        color: 'white',
    },


});
const initialState = true;
function reducer(state, action) {
    switch (action.type) {
        case 'zmienFalse':
            return false;
        case 'zmienTrue':
            return true;
        default:
            throw new Error();
    }
}

export function Losuj(props) {
    const classes = useStyles();
    const [filmLos, setFilmLos] = React.useState()
const [czyszukaj, dispatch]= useReducer(reducer,initialState);
    useEffect(()=>{
        let a=0

        if(czyszukaj) {
            a = (Math.floor(Math.random() * 250))


            let adres = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' + props.lista[a]
            console.log(props.lista[a])
            const options = {
                method: 'GET',
                url: adres,
                headers: {
                    'x-rapidapi-key': '18e1fe7aa4mshc18377df19cd92dp157dcajsned607484995d',
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
                }
            };
            axios.request(options).then(function (response) {

                setFilmLos(response.data);
                dispatch({type: 'zmienFalse'})

            }).catch(function (error) {
                console.error(error);
            });
        }
    }
    )
return(
   <Grid container className={classes.base} direction="row">
       <Grid item xs={12}>
           <p> tu możesz wylosować film z top 250 najlepszych filmów wszechczasów - może właśnie dziś znajdziesz swój nowy ulubiony film?  </p>
   </Grid>



       <Grid item xs={12} fullWight>
           <p>
               <StronaFilmu  dispatch={dispatch} film ={filmLos} szukanie={czyszukaj}></StronaFilmu>
           </p>

       </Grid>
       <Grid item={12}>

       </Grid>

   </Grid>
)
}
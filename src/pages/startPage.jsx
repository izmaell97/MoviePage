import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({

    text: {
         fontSize: 16,
        color: '#151010',
        fontWeight: 700,

    },
    base: {
        background: '#c4bfbf',
           padding: 20,
    },
});
  export function StartPage(props) {

  const classes = useStyles();
  return(

      <div >
          <Grid  justify="center"  alignItems="stretch" className={classes.base}>
          <div className={classes.welcome}> Witaj na stronie głównej aplikacji MOVIEPAGE.</div>
              <div className={classes.welcome}> Zanim zaczniej pracę z aplikacją znajdź przycisk na dole strony.</div>
              <div className={classes.welcome}> Ten przycisk łączy aplikację z bazą danych i jest konieczny do darmowego działania aplikacji</div>
              <div className={classes.welcome}> Na stronie znajdziesz uaktualniane na żywo top 100 najlepiej ocenianych filmów. </div>
              <div className={classes.welcome}> W zakładce losuj możesz wylosować film z top 250 najlepiej ocenianych filmów. </div>
              <div className={classes.welcome}> po naciśnięciu przycisku odczekaj moment- baza musi się załadować.</div>
          </Grid>
      </div>

  );
}


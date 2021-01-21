import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios';
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({

    text: {
        fontSize: 16,
        color: '#151010',
        fontWeight: 700,

    },
    base: {

        background: " radial-gradient(circle, rgba(111,128,106,1) 55%, rgba(242,151,54,1) 100%)",
        padding: 20,
    },
});
export default function Schemat(prop){

    const classes = useStyles();
    return(
        <Grid className={classes.base}>
        <h1>{prop.tytul}</h1>
        <p>{prop.tresc}</p>
            <p>{prop.rang}</p>
        </Grid>
    )
}
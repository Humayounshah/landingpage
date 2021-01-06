import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import  ImageCard from "./ImageCard";
import places from '../Static/places';

const useStyles = makeStyles((theme)=>({
    root:{
        minHeight:'100vh',
        display:'flex',     
        alignItems:'center',
        justifyContent:'center',
    },
}));

const PlaceTovisit = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <ImageCard place={places[0]}/>
            <ImageCard place={places[1]}/>
        </div>
    )
};

export default PlaceTovisit;
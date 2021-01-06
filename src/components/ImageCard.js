import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background:'rgba(0,0,0,0.5)',
    margin:'40px'
  },
  media: {
    height: 340,
  },
  title:{
      fontFamily:'Nunito',
      fontWeight:'bold',
      fontSize:'2rem',
      color:'#fff'
      },
    description:{
        fontFamily:'Nunito',
      fontSize:'1.1rem',
      color:'#ddd'
    }
});

export default function ImageCard({place}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography 
          gutterBottom
           variant="h5"
            component="h2"
            className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2"
            className={classes.description}
          color="textSecondary" component="p">
           {place.desc}
          </Typography>
        </CardContent>
    </Card>
  );
}
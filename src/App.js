import React from 'react'
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyles = makeStyles((theme) => ({
  appBar: { 
    backgroundColor: "#AD4AF7",
    height: "150px",
    width: "100%",
    
  },

  titleBar: {
    marginTop: "50px",
    fontSize: '1.4rem',
      '@media (min-width:600px)': {
      fontSize: '1.9rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
      },
  },

  textWritten: {
      fontSize: '0.5rem',
      '@media (min-width:600px)': {
      fontSize: '0.7rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      },
  },
  menu: {
    backgroundColor: "#48027B",
    height: "50px",
    position: "relative",
    display:"flex",

  },
  buttonShape: {
    color : "#D8B7F1",
    margin: theme.spacing(0), 
  },

  fixButton: {
    position: "relative",
    display:"flex",
    marginTop: "-16px",
    marginRight: "20px",
    justifyContent: "flex-end",
  },
  
  fitBox: {
    position: "relative",
    marginLeft : "19%",
    width : "60%",
    height: "20%",
  },

  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(0),
  },

  avatarEdit: {
    margin: "5px"
  },
  
  fixIcon: {
    marginLeft: "80%",
    marginTop: "-18%",
  },

  fixText: {
    padding: theme.spacing(0),
    marginTop: "5%",
    marginLeft: "-40%",
  }, 

  root: {
    position: "relative",
    maxWidth : "60%",
    margin : "3%",
    marginLeft : "19%"
  },
  
  fixPlay: {
      display: "flex",
      position: "relative",
      maxWidth : "60%",
      margin : "3%",
      marginLeft : "19%",
      backgroundColor: "#A59CA8 "
  },

  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
    
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "white"
  },

  playIcon: {
    margin: "10%",
    width: "50%",
    marginTop : "12%",
  }
}));


const message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `;
 
function App() {
  const classes = useStyles();
  /*Эхний Title хэсэг*/
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className = {classes.titleBar} variant="h6" color = "white" >
          <b>Name & Title</b>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Menu хэсэг */}
      <Box>
        <Box className = {classes.menu}>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.textWritten}>
              OVERVIEW
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.textWritten}>
              FEATURES
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.textWritten}>
              DETAILS
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.textWritten}>
              TECHNOLOGY
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
                <Typography className = {classes.textWritten}>
                FAQ
                </Typography>
          </Button >
          </Box>
          {/* Add буюу нэмэх button */}
      </Box>
          <Box className = {classes.fixButton}>
          <Fab size="small" color = "primary" edge="start">
            <AddIcon />
          </Fab>
      </Box >
          {/* Play буюу тоглуулах button */}
      <Card className={classes.fixPlay}>
            <Fab className = {classes.playIcon}>
              <PlayArrowIcon />
            </Fab>
    {/* Feauture хэсэг */}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Features
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {message}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="medium" color="primary"><b>READ OUR FEATURES</b></Button>
        
      </CardActions>
      </div>
    </Card>

    {/* Detailes хэсэг */}
        <Box className ={classes.fitBox} border = {1} borderRadius={16} boxShadow = "0 5px 7px 2px rgba(147, 7, 188 , .3)">

            <Typography variant = "h4" className = {classes.fixText}>Details</Typography><br></br>
            
                <IconButton className = {classes.fixIcon}>
                  <MoreVertIcon />
                </IconButton>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit}>User</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit}>User</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.avatarEdit}>User</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Box>
          {/* Source button */}
          <Box className = {classes.fixButton}>
              <Button variant = "contained" color = "primary">
                  View Source
              </Button>
          </Box >
    </div>
  );
}

export default App;

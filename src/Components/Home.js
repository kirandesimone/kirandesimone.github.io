import React from 'react';
import Grid from '@material-ui/core/Grid';
import Information from './Information';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../Assets/headshot-Kiran.jpg';

const useStyles = makeStyles({
    image_wrapper: {
        textAlign: 'center',
        position: 'relative',
        paddingTop: 30
    },
    profile_image: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
    },
    information: {
        display: 'flex',
        justifyContent: 'center',
    }
});

function Home() {
    const classes = useStyles();
    return(
        <div className="container">
            <Contact/>
            <div className={classes.image_wrapper}>
                <img src={headshot} alt="headshot" className={classes.profile_image}/>
            </div>
            
            <Grid container spacing={10}>
                <Grid item xs={12}/>

                <Grid container item direction="row" justify="center" alignItems="center">
                    <Information/>
                </Grid>
                <Grid item sm={12}> 
                    <Experience/>
                </Grid>
                <Grid item sm={12}>
                    <Project/>
                </Grid>

                <Grid item xs={12}/>
            </Grid>
        </div>
    )
}

export default Home;

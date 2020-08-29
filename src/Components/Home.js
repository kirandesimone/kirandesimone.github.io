import React from 'react';
import Grid from '@material-ui/core/Grid';
import Information from './Information';
import Experience from './Experience';
import Project from './Project';
import Description from './Description';
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../Assets/headshot-Kiran.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    image_wrapper: {
        textAlign: 'center',
        position: 'relative',
    },
    profile_image: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
    }
});

function Home() {
    const classes = useStyles();
    return(
        <div className="container">
            <div className={classes.image_wrapper}>
                <img src={headshot} alt="headshot" className={classes.profile_image}/>
            </div>
            <Grid container spacing={10}>
                <Grid item xs={12}/>

                <Grid item sm={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={5}>
                            <Information/>
                        </Grid>
                        <Grid item xs={7}>
                            <Description/>
                        </Grid>
                    </Grid>
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
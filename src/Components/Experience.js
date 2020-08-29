import React from 'react';
import ExperienceCard from './ExperienceCard';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 50
    },
    card: {
        marginTop: 50,
    }
})

function Experience() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" component="h3" align="center">
                Experience
            </Typography>
            <div className={classes.card}>
                <ExperienceCard/>
            </div>
        </div>
    )

}


export default Experience;
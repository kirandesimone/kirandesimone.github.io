import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';


const useStyles = makeStyles({
    root: {
        width: 550,
        backgroundColor: [theme.palette.primary.dark]
    },
});

function Description() {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root}>
            <div>
                <div>
                    <Typography component='p' align='center'>
                        Hi my name is Kiran DeSimone and I recently graduated from the coding bootcamp Tech Elevator! 
                        After three short months at Tech Elevator I learned Java, JavaScript, PostgreSQL, Spring MVC, Vue.js, TDD, and much more.
                        During my free time I like to code, workout and watch anime (typical nerd).
                    </Typography>
                </div>
            </div>     
        </Paper>
    )
}

export default Description;
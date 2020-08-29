import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';


const useStyles = makeStyles({
    color: {
        backgroundColor: [theme.palette.primary.dark]
    }
})

function Description() {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.color}>
            <div>
                <div>
                    <Typography variant='p' component='p' align='center'>
                        Hi my name is Kiran DeSimone! This is my description.
                    </Typography>
                </div>
            </div>     
        </Paper>
    )
}

export default Description;
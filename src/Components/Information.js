import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    links: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})


function Information() {

    const classes = useStyles();

    return (
        <Paper elevation={2}>
            <div>
                <div className="name-title">
                    <Typography variant='h3' align="center">
                        Kiran DeSimone
                    </Typography>
                </div>
                <div className={classes.links}>
                    <Typography>
                        <a href="https://www.linkedin.com/in/kirandesimone/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </Typography>
                    <Typography>
                        <a href="https://github.com/kirandesimone" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </Typography>
                </div>
            </div>     
        </Paper>
    )
}

export default Information;
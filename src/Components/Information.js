import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Description from './Description';
import Tooltip from '@material-ui/core/Tooltip';

//react-spring
import { useSpring, animated } from 'react-spring';


const useStyles = makeStyles({
    root: {
        width: 550,
    },
    links: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    
})


function Information() {
    const classes = useStyles();
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80}
    });

    return (
        <div onClick={() => set(state => !state)}>
            
            <animated.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                <Tooltip title="Click to flip!" placement="right-start">
                    <Paper elevation={2} className={classes.root}>
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
                </Tooltip>
            </animated.div>
            <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} > 
                <Description/>
            </animated.div>
        </div>
    )
}

export default Information;
import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

//react-spring
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles({
    root: {
        maxWidth: 375
    },
    media: {
        height: 140
    }
});

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function ProjectCard(props) {
    const classes = useStyles();
    const name = props.name;
    const description = props.description;
    const picture = props.picture;
    const link = props.link;

    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: prop.xys.interpolate(trans) }}
            >
            <Card raised className={classes.root}>
                <CardActionArea href={link} target="_blank" rel="noopener noreferrer">
                    <CardMedia component="img" className={classes.media} image={picture} title=""/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </animated.div>
    )
}

export default ProjectCard;
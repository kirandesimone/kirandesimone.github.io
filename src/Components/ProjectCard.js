import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
})

function ProjectCard(props) {
    const classes = useStyles();
    const name = props.name;
    const description = props.description;
    const picture = props.picture;

    return (
        <Card raised className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={picture} title=""/>
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
    )
}

export default ProjectCard;
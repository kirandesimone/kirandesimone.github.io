import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ProjectCard(props) {
    return(
        <Card raised>
            <CardMedia/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Project name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Example description of project
                </Typography>

            </CardContent>
        </Card>
    )
}

export default ProjectCard;
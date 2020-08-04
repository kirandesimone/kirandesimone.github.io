import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ExperienceCard(props) {
    return(
        <Card raised>
            <CardMedia/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Job Title
                </Typography>
                <Typography variant="body1" component="p">
                    <span> Company </span>
                </Typography>
                <Typography variant="body2" component="p">
                    <span> Job Date </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Job Description
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ExperienceCard;
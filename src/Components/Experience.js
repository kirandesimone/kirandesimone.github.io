import React from 'react';
import ExperienceCard from './ExperienceCard';
import Typography from '@material-ui/core/Typography';

function Experience() {
    return (
        <div>
            <Typography variant="h3" component="h3" align="center">
                Experience
            </Typography>
            <ExperienceCard/>
        </div>
    )

}


export default Experience;
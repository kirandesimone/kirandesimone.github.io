import React from 'react';
import ProjectCard from './ProjectCard';
import Typography from '@material-ui/core/Typography';


function Project() {
    
    return(
        <div>
          <Typography variant="h3" component="h3" align="center">
            Projects
          </Typography>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}


export default Project;
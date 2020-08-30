import React from 'react';
import ProjectCard from './ProjectCard';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import projectData from './data/project.json';

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
  cardDirection: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
});



function Project() {
    const classes = useStyles();
    const projects = projectData.map(project => {
      return (
        <div className={classes.card}>
          <ProjectCard {...project}/>
        </div>
      )
    });

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3" align="center">
        Projects
      </Typography>
      <div className={classes.cardDirection}>
        {projects}
      </div>
        
    </div>
  )
}


export default Project;
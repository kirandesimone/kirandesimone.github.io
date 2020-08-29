import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import maestroLogo from '../Assets/maestro.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    logo: {
        width: 120,
        marginLeft: 'auto'
    },
    
    
})

function ExperienceCard(props) {

    const classes = useStyles();

    return(
        <Card raised className={classes.root}>
            <div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Desktop Support Technician
                    </Typography>
                    <Typography variant="body1" component="p">
                        <span> Maestro Technologies </span>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <span> Jun 2018 - Jan 2020 </span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span>Was on-site at RDC (Regulatory Data Corp)</span><br/>
                        <span>- Supported 150 employees</span><br/>
                        <span>- Developed documentation for applications as needed to load client's workstation</span><br/>
                        <span>- Provided remote support for RDC international locations (UK and Singapore)</span><br/>
                        <span>- Used Windows Servers, Active Directory 2008 in order to create, delete or set accounts and change user passwords</span>
                    </Typography>
                </CardContent>
            </div>
            
                <CardMedia
                    className={classes.logo}
                    image={maestroLogo}
                    title="Maestro Technologies"
                />
            
        </Card>
    )
}

export default ExperienceCard;
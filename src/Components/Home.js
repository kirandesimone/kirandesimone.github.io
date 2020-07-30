import React from 'react';
import Grid from '@material-ui/core/Grid';
import Information from './Information';



function Home() {
    return(
        <Grid container spacing={8}>
            <Grid item sm={8} xs={12}/>
            <Grid item sm={5} xs={12}>
                <Information/>
            </Grid>
        </Grid>
    )
}

export default Home;
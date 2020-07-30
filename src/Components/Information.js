import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function Information() {
    return (
        <Paper elevation={3}>
                    <div>
                        <div classNam="img-wrapper">
                            <img alt="headshot"/>
                        </div>
                        <div className="name-title">
                            <Typography variant='h3'>
                                Kiran DeSimone
                            </Typography>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/kirandesimone/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/kirandesimone" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>
                    </div>
                    
                </Paper>
    )
}

export default Information;
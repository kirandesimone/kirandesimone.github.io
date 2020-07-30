import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'


function Navbar() {
    return (
        <AppBar>
            <Toolbar className="nav-container">
                <Fragment> 
                    <Link to="/">
                        <Button color="secondary">
                            Home
                        </Button> 
                    </Link>
                    <Link to="/experience">
                        <Button color="secondary">
                            Experience
                        </Button>
                    </Link>
                    <Link to="/projects">
                        <Button color="secondary">
                            Projects
                        </Button>
                    </Link>
                    
                </Fragment>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;


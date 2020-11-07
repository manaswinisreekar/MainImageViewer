import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles'

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="main-container">
                <StylesProvider injectFirst>
                    <AppBar className="page-header">
                        <Toolbar >
                            <Typography className="title-text" variant="h6" noWrap><Link className="home-link" to='/home' >{this.props.title}</Link></Typography>
                            <Box ml="auto" display="flex" flexDirection="row" alignItems="center" >
                                {this.props.positionLeft}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <div className="page-body">
                        {this.props.children}
                    </div>
                </StylesProvider>
            </div>
        );
    }
}

export default Header; 

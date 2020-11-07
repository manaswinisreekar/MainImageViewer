import React from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    search: {
        marginRight: "5%",
        padding: "0.8%",
        borderRadius: "4px",
        width: "300px",
        backgroundColor: "#c0c0c0",
        color: "darkslategray"
    }

});

function Search(props) {
    const classes = useStyles();

    return (
        <Input disableUnderline className={classes.search}
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon fontSize="large" />
                </InputAdornment>
            } placeholder="Search..." onChange={props.onChange} />
    );
}

export default Search;


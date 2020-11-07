import React from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function PostMedia(props) {

    const useStyles = makeStyles({
        imageContainer: {
            marginLeft: 0,
            paddingBottom: '1%',
            minHeight: (!props.minHeight) ? '350px' : props.minHeight,
            minWidth: (!props.minWidth) ? '350px' : props.minHeight,
            height: '100%',
            width: '100%'
        }
    });

    const classes = useStyles();

    return (
        <CardMedia className={"post-image " + classes.imageContainer} image={props.media} title={props.mediaId} />
    );
}

export default PostMedia;

import React from 'react';
import { IconButton, Typography, Box } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    dense: {
        margin: 'auto',
        marginLeft: '0',
        paddingLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    block: {
        display: 'block'
    }

});

function PostLikes(props) {
    const [isLiked, setLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(props.likes);
    const classes = useStyles();
    const onLike = () => {
        (isLiked) ? setLikes(likes - 1) : setLikes(likes + 1);
        setLiked(!isLiked);
    }
    return (
        <Box className={"post-likes " + classes.block}>
            <IconButton onClick={onLike} className={classes.dense}>
                {(isLiked) ? <Favorite color="error" className={classes.dense} /> : <FavoriteBorderOutlined className={classes.dense} />}
            </IconButton>
            <Typography variant="caption">{likes} likes</Typography>
        </Box>
    );
}

export default PostLikes; 
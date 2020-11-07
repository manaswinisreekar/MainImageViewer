import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileIcon from '../../common/profile/ProfileIcon';

const useStyles = makeStyles({

    header: {
        width: '100%',
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    textStrong: {
        fontWeight: 750
    },

    textLite: {
        fontWeight: 500
    }

});

function PostHeader(props) {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" className={"post-user " + classes.header}>
            <ProfileIcon type="avatarOnly" />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <Typography className={classes.textStrong} variant="body1">{props.postUser}</Typography>
                {(!props.includeTimestamp) ? "" : <Typography className={classes.textLite} variant="subtitle2">{props.postedTime}</Typography>}
            </Box>
        </Box>
    );
}

export default PostHeader;
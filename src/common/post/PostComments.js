import React from 'react';
import { Typography, FormControl, Box, InputLabel, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textStrong: {
        fontWeight: 750
    },

    textLite: {
        fontWeight: 500
    },

    block: {
        display: 'block'
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    dense: {
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    textInput: {
        width: '80%',
        marginRight: '2%'
    },

    btnAdd: {
        width: '20%'
    }

});

function PostComments(props) {
    const [text, setText] = React.useState([]);
    const [comments, setComments] = React.useState([]);
    const classes = useStyles();
    const onAddComment = () => {
        setComments([...comments, { id: comments.length + 1, text: text }]);
        setText("");
    }
    const onInputChange = (e) => setText(e.target.value);
    return (
        <Box width="100%" className={"post-comments " + classes.block}>
            {comments.map(comment => (
                <Box key={comment.id} display="flex" alignItems="center" justifyContent="flex-start">
                    <Typography variant="body2" className={classes.textStrong + " " + classes.dense}>{props.postUser}: </Typography>
                    <Typography variant="body2" className={classes.textLite + " " + classes.dense}>{comment.text}</Typography>
                </Box>
            ))}
            {props.children}
            <FormControl className={classes.container + " " + classes.dense} variant="standard">
                <InputLabel className={classes.dense} htmlFor={props.baseId + "-field-comment"}>Add a comment</InputLabel>
                <Input className={classes.textInput + " " + classes.dense} id={props.baseId + "-field-comment"} type="text" value={text} onChange={onInputChange} />
                <Button className={classes.btnAdd} variant="contained" color="primary" id="btn-add" onClick={onAddComment}>ADD</Button>
            </FormControl>
        </Box>
    );
}

export default PostComments; 

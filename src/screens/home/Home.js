import React, { Component } from 'react';
import { Box, Card, CardContent, CardActions, CardHeader, Typography } from '@material-ui/core';
import PostMedia from '../../common/post/PostMedia';
import PostCaption from '../../common/post/PostCaption';
import PostLikes from '../../common/post/PostLikes';
import PostComments from '../../common/post/PostComments';
import Header from '../../common/header/Header';
import ProfileIcon from '../../common/profile/ProfileIcon';
import Search from '../../common/Search/Search';
import './Home.css';
import Config from '../../common/Config';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            searchPattern: "",
            posts: [],
            userPosts: []
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.redirectUserToAccountsPage = this.redirectUserToAccountsPage.bind(this);
        this.filterPost = this.filterPost.bind(this);
    }

    // Filter posts basis the search text
    filterPost = (e) => {
        this.setState({
            searchPattern: e.target.value,
            userPosts: this.state.posts.filter(
                (post) => post.caption ? post.caption.includes(e.target.value) : null
            )
        });
    }

    // Handling logout
    logoutUser = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    // Converting date to required format
    convertDate = (x) => {
        let date = new Date(x);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        dd = (dd < 10) ? ("0" + dd) : dd;
        mm = (mm < 10) ? ("0" + mm) : mm;
        return dd + '/' + mm + '/' + date.getFullYear() +
            ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };

    // Navigate to user's profile page
    redirectUserToAccountsPage = () => this.props.history.push('/profile');

    getProfileAvatar = () => {
        return (
            <Box ml="auto" display="flex" flexDirection="row" alignItems="center">
                <Search onChange={this.filterPost} />
                <ProfileIcon type="avatarWithMenu" menuOptions={['My Account', 'Logout']}
                    handlers={[this.redirectUserToAccountsPage, this.logoutUser]} />
            </Box>);
    };

    // Fetching posts data by making the API calls
    async componentDidMount() {
        if (!Config.api.mock) {
            let accessToken = window.sessionStorage.getItem("access-token");
            let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
            let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);

            let response = await fetch(getPostsURI);
            let posts = await response.json();
            posts = posts.data;

            for (let i = 0; i < posts.length; i++) {
                response = await fetch(getPostDetailsURI.replace('$postId', posts[i].id));
                let details = await response.json();
                posts[i].media_type = details.media_type;
                posts[i].media_url = details.media_url;
                posts[i].username = details.username;
                posts[i].timestamp = details.timestamp;
                posts[i].comments = [];
                posts[i].isLiked = false;
                posts[i].numLikes = Math.round(100 + Math.random() * 100);
            }
            this.setState({ userPosts: posts });
            this.setState({ posts: posts.filter(x => true) });
        }
    }

    render() {
        return (
            <Header title="Image Viewer" positionLeft={this.getProfileAvatar}>
                {
                    (this.state.userPosts.length > 0) ?
                        (
                            <Box display="flex" width="90%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" justifyContent="space-between">
                                {
                                    this.state.userPosts.map(userPost => (
                                        <Card key={userPost.id + "post"} raised className="post">
                                            <CardHeader className="post-header" disableTypography
                                                avatar={<ProfileIcon type="avatarOnly" />}
                                                title={<Typography className="text-bold" variant="body1">{userPost.username}</Typography>}
                                                subheader={<Typography className="text-lite" variant="subtitle2">{this.convertDate(userPost.timestamp)}</Typography>}>
                                            </CardHeader>
                                            <CardContent className="post-content">
                                                <PostMedia media={userPost.media_url} mediaId={userPost.id} />
                                                <PostCaption text={userPost.caption} />
                                            </CardContent>
                                            <CardActions className="post-footer">
                                                <Box width="100%" display="flex" flexDirection="column" alignItems="left">
                                                    <PostLikes likes={userPost.numLikes} />
                                                    <PostComments baseId={userPost.id} postUser={userPost.username} />
                                                </Box>
                                            </CardActions>
                                        </Card>
                                    ))
                                }
                            </Box>) : ""}
            </Header>
        );
    }
}
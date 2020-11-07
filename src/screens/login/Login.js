import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './Login.css';
import Header from '../../common/header/Header';
import Config from '../../common/Config';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequiredMessage: "displayNone",
            passwordRequiredMessage: "displayNone",
            incorrectCredentialsMessage: "displayNone"
        }
    }

    /* Function to handle username field */
    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value, usernameRequiredMessage: "displayNone" });
    }

    /* Function to handle password field */
    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value, passwordRequiredMessage: "displayNone" });
    }

    /* Function to perform required activities/validations post LOGIN button click by the user */
    loginButtonClickHandler = () => {
        if (this.state.username === "" || this.state.password === "") {
            this.state.username === "" ?
                this.setState({ usernameRequiredMessage: "displayBlock" }) : this.setState({ usernameRequiredMessage: "displayNone" });
            this.state.password === "" ?
                this.setState({ passwordRequiredMessage: "displayBlock" }) : this.setState({ passwordRequiredMessage: "displayNone" });
            this.setState({ incorrectCredentialsMessage: "displayNone" });
        } else if (this.state.username === Config.credentials.username && this.state.password === Config.credentials.password) {
            this.navigateToHome();
        } else {
            this.setState({ incorrectCredentialsMessage: "displayBlock" });
        }
    }

    /* Function to navigate to home page */
    navigateToHome = () => {
        this.setState({ incorrectCredentialsMessage: "displayNone" });
        window.sessionStorage.setItem('access-token', Config.authentication["access-token"]);
        this.props.history.push('/home');
    }

    render() {
        return (
            <Header title="Image Viewer">
                <Card className="login-card" >
                    <CardContent>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Typography className="login-title" variant="h5" component="h5" color="textPrimary"
                            >LOGIN</Typography>
                        </FormControl>

                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" onChange={this.usernameChangeHandler} />
                            <FormHelperText error className={this.state.usernameRequiredMessage}>required</FormHelperText>
                        </FormControl>

                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.passwordChangeHandler} />
                            <FormHelperText error className={this.state.passwordRequiredMessage}>required</FormHelperText>
                        </FormControl>

                        <FormHelperText error className={this.state.incorrectCredentialsMessage}>Incorrect username and/or password</FormHelperText>
                    </CardContent>

                    <CardActions>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Button variant="contained" color="primary" id="login-btn" onClick={this.loginButtonClickHandler}>LOGIN</Button>
                        </FormControl>
                    </CardActions>
                </Card>
            </Header>
        );
    }
}

export default Login;
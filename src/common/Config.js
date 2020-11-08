//accesstoken
//IGQVJWR18wT1haS2JqdWQwb2hvb3RYU1FLbUF6Vm50ckYwLUVKNjVtU1N6UmxHMXItQlYtbk1jYUNVRnBMNktYSDg0aUxjcndhb1NhQ0M4MnAtUUN4enNFUnh6bURncFlzSkVFdElqOVVlalMwNGw5aHE0bUpqR00xdkYw//
var Config = {
    "credentials": {
        "username": "user",
        "password": "user"
    },
    "authentication": {
        "access-token": "IGQVJWR18wT1haS2JqdWQwb2hvb3RYU1FLbUF6Vm50ckYwLUVKNjVtU1N6UmxHMXItQlYtbk1jYUNVRnBMNktYSDg0aUxjcndhb1NhQ0M4MnAtUUN4enNFUnh6bURncFlzSkVFdElqOVVlalMwNGw5aHE0bUpqR00xdkYw"
    },
    "api":
    {
        "mock": false,
        "endpoints":
            [
                {
                    "name": "Get Posts",
                    "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
                },
                {
                    "name": "Get Post Details",
                    "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
                }
            ]
    }
};
export default Config; 

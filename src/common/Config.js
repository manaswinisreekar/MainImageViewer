//accesstoken
//IGQVJWR18wT1haS2JqdWQwb2hvb3RYU1FLbUF6Vm50ckYwLUVKNjVtU1N6UmxHMXItQlYtbk1jYUNVRnBMNktYSDg0aUxjcndhb1NhQ0M4MnAtUUN4enNFUnh6bURncFlzSkVFdElqOVVlalMwNGw5aHE0bUpqR00xdkYw//
//IGQVJWdXZANOVRzTzh4V09idklHMmhzN21ranhjY3ZAMMmhlUFJKdm5tT2ZAxUkNzSnVIZAlIyMjk2Vm5vbXM4ZA3BmclZAqMGg2MC1wY3VFcWVjQjRLN0Uxa0dlMlFHLUhRME5LcGtPLWVMbG52OWhDYUxpUUVPam5jQXA1eklN//
var Config = {
    "credentials": {
        "username": "user",
        "password": "user"
    },
    "authentication": {
        "access-token": "IGQVJWdXZANOVRzTzh4V09idklHMmhzN21ranhjY3ZAMMmhlUFJKdm5tT2ZAxUkNzSnVIZAlIyMjk2Vm5vbXM4ZA3BmclZAqMGg2MC1wY3VFcWVjQjRLN0Uxa0dlMlFHLUhRME5LcGtPLWVMbG52OWhDYUxpUUVPam5jQXA1eklN"
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

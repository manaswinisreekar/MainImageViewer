//accesstoken
//"IGQVJVVkNldWNIRFBYYkVTM1dXNFhpNGYtS2VPc0VHblZA6dENSQ3ZA5b1BWZAHNBbGtNTHlERk8xWHJVakpvX0xZAZAVMxSkEydWVRS0g1WV9WWnJ2UU1RcEhvd0M5eTJCY3BXVVJ1a2F1NE1menRHSDFJYUsxYmRPdk5sT3VR",


var Config = {
    "credentials": {
        "username": "user",
        "password": "user"
    },
    "authentication": {
        "access-token": "IGQVJVVkNldWNIRFBYYkVTM1dXNFhpNGYtS2VPc0VHblZA6dENSQ3ZA5b1BWZAHNBbGtNTHlERk8xWHJVakpvX0xZAZAVMxSkEydWVRS0g1WV9WWnJ2UU1RcEhvd0M5eTJCY3BXVVJ1a2F1NE1menRHSDFJYUsxYmRPdk5sT3VR"
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

//accesstoken
//"IGQVJVVkNldWNIRFBYYkVTM1dXNFhpNGYtS2VPc0VHblZA6dENSQ3ZA5b1BWZAHNBbGtNTHlERk8xWHJVakpvX0xZAZAVMxSkEydWVRS0g1WV9WWnJ2UU1RcEhvd0M5eTJCY3BXVVJ1a2F1NE1menRHSDFJYUsxYmRPdk5sT3VR",
//"IGQVJXVkN6bm1LeG5uVHd0aXliSkFqV0dPRGF2UkVFR3UtWnFHMlVianZAfdHpCY0NUajk2TGh6bjUwT05ZAbHZAPRVRjdFdJTVJwTUl0a28tbl9feHZAtTl9yREYwSVFNSHNBVHRSY0FLQm5XM2NxM3dDMFZAkaXBBbmVrQmRv"
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

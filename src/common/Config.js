//accesstoken
//IGQVJWX3F2aVBSZAHdJNWNvVExCaHg3VUQwWkdRVFlVVnB2bWVDRVhkdzRrVUJsUHF6X01YTlhmY2lRT3dkOVJ2dHNCQ1pNZAUJOVXlmWEJ3X1MyRXFpcHI2QmkxTHFQeHg5YjNrSE5kc1JuY1NLS0w2Y3A3RkM3RTJEUHVn
//IGQVJVdFFqRXFvSmU1dWt4V29aeEJYQmxMaGZA3c0JUR3hpbDdETFJOekljTkZAYdlVXZAGktX3ppSXE0dnFKQmdqNkdsa0pjWFVDSE9SbFNKcVZAkRzhqdnVhNFNZAUzRzQ2dUY1J1cS1JRWh0YVBVUnZAySQZDZD
var Config = {
    "credentials": {
        "username": "user",
        "password": "user"
    },
    "authentication": {
        "access-token": "IGQVJVdFFqRXFvSmU1dWt4V29aeEJYQmxMaGZA3c0JUR3hpbDdETFJOekljTkZAYdlVXZAGktX3ppSXE0dnFKQmdqNkdsa0pjWFVDSE9SbFNKcVZAkRzhqdnVhNFNZAUzRzQ2dUY1J1cS1JRWh0YVBVUnZAySQZDZD"
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

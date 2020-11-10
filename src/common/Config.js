//accesstoken
//"access_token": "IGQVJWZA09tQ29LOTZAwbVNuemRNdEpDeGJNSjZAieFl2djFNWS0yRTYzdnJUREdjLWFVS0hGZAnlwenk2ZAm5JUi1SQlVJal80c3ZA3X3l3UVl4R2FvaTdsd1N2M0ZAIMENzc2NZASDdfTW5mMWUtcHVQTmM0dmNicTNPSjJxaWVn",
//
var Config = {
    "credentials": {
        "username": "user",
        "password": "user"
    },
    "authentication": {
        "access-token": "IGQVJWZA09tQ29LOTZAwbVNuemRNdEpDeGJNSjZAieFl2djFNWS0yRTYzdnJUREdjLWFVS0hGZAnlwenk2ZAm5JUi1SQlVJal80c3ZA3X3l3UVl4R2FvaTdsd1N2M0ZAIMENzc2NZASDdfTW5mMWUtcHVQTmM0dmNicTNPSjJxaWVn"
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

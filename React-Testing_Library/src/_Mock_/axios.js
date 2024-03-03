const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Hossein",
                    last: "kolivand"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}

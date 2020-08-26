let apiUrl = null;
let headers = {};

const APIService = {
    init (url, headers = {}) {
        apiUrl = url;
        headers = headers;
    },
    get: async () => {
        if(apiUrl === null){
            throw new Error("Initiate service first with init(url[, headers])")
        };
        const response = fetch(apiUrl, {
            headers:headers,
        });
        return await response.json();
    },
    post: async (resource, data) => {
        if(apiUrl === null){
            throw new Error("Initiate service first with init(url[, headers])")
        };
        const response = await fetch(apiUrl, {
            headers:headers,
            method: "POST",
            body: JSON.stringify(data)
        });
        return await response.json();
    },
};

export default APIService;
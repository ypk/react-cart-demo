let apiUrl = null;
let apiHeaders = {};

const APIService = {
  init(url, headers = {}) {
    apiUrl = url;
    apiHeaders = headers;
  },
  get: async (setError) => {
    if (apiUrl === null) {
      throw new Error("Initiate service first with init(url[, headers])");
    }
    try {
      const response = await fetch(apiUrl, {
        headers: apiHeaders,
      });
      let json = await response.json();
      return json;
    } catch (e) {
      setError(e);
    }
  },
  post: async (resource, data, setError = (e) => console.error(e)) => {
    if (apiUrl === null) {
      throw new Error("Initiate service first with init(url[, headers])");
    }

    try {
      const response = await fetch(apiUrl, {
        headers: apiHeaders,
        method: "POST",
        body: JSON.stringify(data),
      });
      let json = await response.json();
      return json;
    } catch (e) {
      setError(e);
    }
  },
};

export default APIService;

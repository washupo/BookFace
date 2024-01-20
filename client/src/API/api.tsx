import axios from "axios";

export const api = axios.create({
    baseURL: "/api",
});

interface TokenPayload {
    id: string;
    username: string;
    // Add other fields as needed
}

export const getTokenPayload = (): TokenPayload | null => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const [, payloadBase64] = token.split(".");
            const decodedPayload = JSON.parse(atob(payloadBase64)) as TokenPayload;
            return decodedPayload;
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }
    return null;
};

//Add a request interceptor
api.interceptors.request.use(
    (config) => {
       const token = localStorage.getItem("token");
       if (token) {
           config.headers.Authorization = `Bearer ${token}`;
           const tokenPayload = getTokenPayload();
           if (tokenPayload) {
               // You can now use tokenPayload.id, tokenPayload.username, etc.
               config.headers["X-User-Id"] = tokenPayload.id;
        //        config.headers["X-Username"] = tokenPayload.username;
        //        // Add other headers for additional fields as needed
           }
       }
       return config
   },
    (error) =>Promise.reject(error)
);

//Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem("refreshToken");
                const response = await axios.post("/api/auth/refreshToken", {
                    refreshToken,
                });
                const { token } = response.data;
                localStorage.setItem("token", token);
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                console.log(error);
            }
        }
        return Promise.reject(error);
    }
)



import axios from "axios";

export const api = axios.create({
    baseURL: "/api",
});

//Add a request interceptor
api.interceptors.request.use(
     (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
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
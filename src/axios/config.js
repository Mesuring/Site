import axios from "axios"

const blogFetch = axios.create({
    baseURL: "https://localhost/3001"
});

export default blogFetch;
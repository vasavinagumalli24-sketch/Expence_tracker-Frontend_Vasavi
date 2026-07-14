import axios from "axios";

const api = axios.create({

    baseURL: "https://expence-tracker-backend-vasavi.onrender.com/api"

});

export default api;

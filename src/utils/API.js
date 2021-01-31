import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};

export default API;
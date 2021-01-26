import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
    search: function(query) {
        console.log(query);
        console.log(BASEURL + query);
        console.log(axios.get(BASEURL + query));
        return axios.get(BASEURL + query);
    }
};

export default API;
import axios from "axios";
import { baseUrl } from "./constants/constants";

//axios instance
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;

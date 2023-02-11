import axios from "axios";

import { API, API_VERSION } from "../utils/constanst";

export const baseApi = axios.create({
  baseURL: `${API}/${API_VERSION}`,
});

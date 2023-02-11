import { ICountries } from "../state/types/types";
import { baseApi } from "./baseApi";

export const getCountries = (): Promise<ICountries[]> =>
  baseApi.get("/all").then((r) => r.data);

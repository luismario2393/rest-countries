import { ICountries } from "../state/types/types";
import { baseApi } from "./baseApi";

export const getCountries = (): Promise<ICountries[]> =>
  baseApi.get("/all").then((r) => r.data);

export const getCountrieName = (query: string): Promise<ICountries[]> =>
  baseApi.get(`/name/${query}`).then((r) => r.data);

export const getRegion = (query: string): Promise<ICountries[]> =>
  baseApi.get(`/region/${query}`).then((r) => r.data);

import { atom } from "recoil";

import { ICountries } from "../types/types";

export const countryState = atom<ICountries>({
  key: "countryNameAtom",
  default: {} as ICountries,
});

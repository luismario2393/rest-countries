import { atom, selector } from "recoil";
import { getCountries } from "../../api/countries";
import { ICountries } from "../types/types";

const defaultSelector = selector<ICountries[]>({
  key: "countriesState/default",
  get: async () => {
    return getCountries();
  },

  set: ({ set }, newValue) => {
    set(countriesState, newValue);
  },
});

export const countriesState = atom<ICountries[]>({
  key: "countriesState",
  default: defaultSelector,
});

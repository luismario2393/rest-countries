import { atom, selector } from "recoil";
import { getCountries } from "../../api/countries";
import { ICountries } from "../types/types";

const defaultSelector = selector<ICountries[]>({
  key: "productsState/default",
  get: async () => {
    return getCountries();
  },
});

export const countriesState = atom<ICountries[]>({
  key: "countriesState",
  default: defaultSelector,
});

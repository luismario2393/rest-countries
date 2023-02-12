import { ChangeEvent, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCountrieName, getCountries, getRegion } from "../../api/countries";
import { countriesState } from "../../state/atom/countries";
import { ICountries } from "../../state/types/types";
import { CountryCard } from "../CountryCard";
import { SearchInput } from "../SearchInput";
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { ContainerCard, ContainerFilters, StyledSelect } from "./styled";
import { countryState } from "../../state/atom/country";
import { darkModeState } from "../../state/atom/darkMode";

export const Home = () => {
  const [countries, setCountries] =
    useRecoilState<ICountries[]>(countriesState);
  const darkMode = useRecoilValue(darkModeState);
  const [, setCountry] = useRecoilState<ICountries>(countryState);
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = e.target;

      if (value.length > 2) {
        const search = await getCountrieName(value);
        setCountries(search);
      } else if (value.length === 0) {
        const search = await getCountries();
        setCountries(search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const regions = useMemo(
    () => [
      {
        label: "Africa",
        value: "africa",
      },
      {
        label: "America",
        value: "america",
      },
      {
        label: "Asia",
        value: "asia",
      },
      {
        label: "Europe",
        value: "europe",
      },
      {
        label: "Oceania",
        value: "oceania",
      },
    ],
    []
  );

  const handleFilter = async (value: any) => {
    try {
      if (value) {
        const filter = await getRegion(value);
        setCountries(filter);
      } else if (value === undefined || value === null || value === "") {
        const countries = await getCountries();
        setCountries(countries);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ContainerFilters darkMode={darkMode}>
        <SearchInput
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e)}
        />

        <StyledSelect
          darkMode={darkMode}
          open={open}
          placeholder="Filter by Region"
          onDropdownVisibleChange={(open) => setOpen(open)}
          style={{ width: 200, height: 60 }}
          onChange={(value) => handleFilter(value)}
          options={regions}
          allowClear={true}
          suffixIcon={<IoChevronDown />}
        />
      </ContainerFilters>
      <ContainerCard darkMode={darkMode}>
        {countries.map((country: ICountries) => (
          <CountryCard
            country={country}
            key={country.cca3}
            onClick={() => {
              navigate(`/${country.cca3}`);
              setCountry(country);
            }}
          />
        ))}
      </ContainerCard>
    </>
  );
};

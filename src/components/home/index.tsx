import { ChangeEvent, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { getCountrieName, getCountries, getRegion } from "../../api/countries";
import { countriesState } from "../../state/atom/countries";
import { ICountries } from "../../state/types/types";
import { CountryCard } from "../CountryCard";
import { Header } from "../Header";
import { SearchInput } from "../SearchInput";
import { IoChevronDown } from "react-icons/io5";

import {
  Container,
  ContainerCard,
  ContainerFilters,
  StyledSelect,
} from "./styled";

export const Home = () => {
  const [countries, setCountries] =
    useRecoilState<ICountries[]>(countriesState);
  const [open, setOpen] = useState<boolean>(false);

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
    <Container>
      <Header />
      <ContainerFilters>
        <SearchInput
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e)}
        />

        <StyledSelect
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
      <ContainerCard>
        {countries.map((country: ICountries) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </ContainerCard>
    </Container>
  );
};

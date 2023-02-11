import { useRecoilValue } from "recoil";
import { countriesState } from "../../state/atom/countries";
import { ICountries } from "../../state/types/types";
import { CountryCard } from "../CountryCard";
import { Header } from "../Header";
import { Container, ContainerCard } from "./styled";

export const Home = () => {
  const countries = useRecoilValue(countriesState);
  return (
    <Container>
      <Header />
      <ContainerCard>
        {countries.map((country: ICountries) => (
          <CountryCard country={country} />
        ))}
      </ContainerCard>
    </Container>
  );
};

import { FC, useMemo } from "react";
import { ICountries } from "../../state/types/types";
import { Card, ContainerImage, ContainerText } from "./styled";

interface Props {
  country: ICountries;
}

export const CountryCard: FC<Props> = ({ country }) => {
  const populationFormat = useMemo(
    () => new Intl.NumberFormat("es-ES").format(country.population),
    [country.population]
  );

  return (
    <Card>
      <ContainerImage>
        <img src={country.flags.png ?? ""} alt={country.flags.alt ?? ""} />
      </ContainerImage>
      <ContainerText>
        <h3>{country.name.common}</h3>
        <p>
          Population: <span>{populationFormat ?? ""}</span>
        </p>
        <p>
          Region: <span>{country.region ?? ""}</span>
        </p>
        <p>
          Capital: <span>{country.capital ?? ""}</span>
        </p>
      </ContainerText>
    </Card>
  );
};

import { FC, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../state/atom/darkMode";
import { ICountries } from "../../state/types/types";
import { Card, ContainerImage, ContainerText } from "./styled";

interface Props {
  country: ICountries;
  onClick: () => void;
}

export const CountryCard: FC<Props> = ({ country, onClick }) => {
  const darkMode = useRecoilValue(darkModeState);
  const populationFormat = useMemo(
    () => new Intl.NumberFormat("es-ES").format(country.population),
    [country.population]
  );

  return (
    <Card onClick={onClick} darkMode={darkMode}>
      <ContainerImage>
        <img src={country.flags.png ?? ""} alt={country.flags.alt ?? ""} />
      </ContainerImage>
      <ContainerText darkMode={darkMode}>
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

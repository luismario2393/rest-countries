import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRecoilState, useRecoilValue } from "recoil";

import { countryState } from "../../state/atom/country";
import { ICountries } from "../../state/types/types";
import { Button, TButton } from "../Button";
import {
  Container,
  ContainerButton,
  ContainerDetail,
  ContainerText,
  CountainerBorders,
  CountainerTextDetail,
} from "./styled";
import { getCodesCountries, getCountries } from "../../api/countries";
import { countriesState } from "../../state/atom/countries";
import { darkModeState } from "../../state/atom/darkMode";

export const Country = () => {
  const darkMode = useRecoilValue(darkModeState);
  const country = useRecoilValue<ICountries>(countryState);
  const [, setCountries] = useRecoilState<ICountries[]>(countriesState);
  const [countryNames, setCountryNames] = useState<ICountries[]>([]);

  const navigate = useNavigate();

  const populationFormat = useMemo(
    () => new Intl.NumberFormat("es-ES").format(country.population),
    [country.population]
  );

  const languages = useMemo(
    () =>
      Object.keys(country.languages ?? {}).map(
        (key) => country.languages?.[key]
      ),
    [country.languages]
  );

  const nativeName = useMemo(
    () =>
      Object.keys(country.name?.nativeName ?? {}).map(
        (key) => country.name?.nativeName?.[key].common
      ),
    [country.name?.nativeName]
  );

  const currencies = useMemo(
    () =>
      Object.keys(country.currencies ?? {}).map(
        (key) => country.currencies?.[key].name
      ),
    [country.currencies]
  );

  const borders = useMemo(
    () => country.borders?.join(",") ?? "",
    [country.borders]
  );

  useEffect(() => {
    if (borders === "") return;
    getCodesCountries(borders).then((res) => setCountryNames(res));
  }, [borders]);

  const returnHome = async () => {
    navigate("/");
    const countries = await getCountries();
    setCountries(countries);
  };

  return (
    <Container darkMode={darkMode}>
      <ContainerButton>
        <Button
          text="Back"
          type={TButton.default}
          icon={<IoIosArrowRoundBack />}
          onClick={returnHome}
        />
      </ContainerButton>

      <ContainerDetail darkMode={darkMode}>
        <img src={country.flags?.png ?? ""} alt={country.flags?.alt ?? ""} />

        <ContainerText>
          <h3>{country.name?.common}</h3>
          <CountainerTextDetail>
            <div>
              <p>
                Native Name: <span>{nativeName ?? ""}</span>
              </p>
              <p>
                Population: <span>{populationFormat ?? ""}</span>
              </p>
              <p>
                Region: <span>{country.region ?? ""}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion ?? ""}</span>
              </p>
              <p>
                Capital: <span>{country.capital[0] ?? ""}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{country.tld[0] ?? ""}</span>
              </p>
              <p>
                Currencies: <span>{currencies ?? ""}</span>
              </p>
              <p>
                Languages:{" "}
                <span>{languages.toString().replace(",", ", ") ?? ""}</span>
              </p>
            </div>
          </CountainerTextDetail>
          {countryNames.length > 0 && (
            <CountainerBorders darkMode={darkMode}>
              <p>Border Countries: </p>
              <div>
                {countryNames.map((item) => (
                  <div key={item.cca3}>{item.name?.common}</div>
                ))}
              </div>
            </CountainerBorders>
          )}
        </ContainerText>
      </ContainerDetail>
    </Container>
  );
};

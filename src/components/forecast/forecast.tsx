import {
  Container,
  Header,
  Content,

  Title,
  Temperature,
  Sensation,
  Temperatures,
  ForecastContainer,
  DayContainer,
  DayName,
  DayTemperatures,

} from "./styles";

import moment from "moment";
import 'moment/locale/pt-br';

import { AiOutlineClose, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

interface WeatherProps {
  weather: {
    current: {
      cloud: number;
      condition: {
        icon: string;
        text: string;
      };
      wind_kph: number;
      feelslike_c: number;
      gust_kph: number;
      humidity: number;
      is_day: number;
      last_updated: string;
      temp_c: number
    },
    location: {
      country: string;
      name: string;
      region: string;
    },
    forecast: {
      forecastday: [
        {
          date: string;
          day: {
            maxtemp_c: number;
            mintemp_c: number;
            condition: {
              text: string;
            }
          }
        }
      ]

    }
  }
}

export function Forecast({ weather }: WeatherProps) {
  moment.locale('pt-br');

  // <a href="https://www.weatherapi.com/" title="Free Weather API">
  //   <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

  return (
    <Container>

      <Header>
        <div>
          <span>{weather.location.name},</span>
          <span>{weather.location.region}</span>
        </div>
        <h4>
          <AiOutlineClose />
        </h4>
      </Header>

      <Title>
        <div>
          <span>{weather.current.temp_c}ºC</span>
          <span>{weather.current.condition.text}</span>
        </div>
        <img src={weather.current.condition.icon} alt="" />
      </Title>

      <Content>
        <Temperature>
          <Temperatures>
            <span>
              <AiOutlineArrowDown />
              {weather.forecast.forecastday[0].day.mintemp_c}º
            </span>
            <span>
              <AiOutlineArrowUp />
              {weather.forecast.forecastday[0].day.maxtemp_c}º
            </span>
          </Temperatures>

          <div>
            <span>
              Vento {weather.current.wind_kph}km/h
            </span>
          </div>
        </Temperature>


        <Sensation>
          <span>Sensação {weather.current.feelslike_c}º</span>
          <span>Humidade {weather.current.humidity}%</span>
        </Sensation>
      </Content>
      <hr />

      <ForecastContainer>
        {weather.forecast.forecastday.slice(1).map((item) => (
          <DayContainer key={item.date}>
            <DayName>
              {new Date(item.date + 'T00:00:00Z').toLocaleDateString('pt-br', { weekday: 'long', timeZone: 'UTC' })}
            </DayName>

            <DayTemperatures>
              <span><AiOutlineArrowDown />{item.day.mintemp_c}</span>
              <span><AiOutlineArrowUp />{item.day.maxtemp_c}</span>
            </DayTemperatures>
          </DayContainer>
        ))}

      </ForecastContainer>

    </Container>
  )
}
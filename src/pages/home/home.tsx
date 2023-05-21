import { useEffect, useState } from "react";
import { ListOfCapital } from "../../components/listOfCapital/listOfCapital";
import { Container, SearchBar, Title } from "./styles";
import api from "../../services/api";
import { Forecast } from "../../components/forecast/forecast";
import { BsSearch } from "react-icons/bs";

interface WeatherProps {
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

interface CapitalProps {

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
  },
  location: {
    name: string;
    region: string;
  },
  current: {
    is_day: number;
  },

}

export function Home() {
  const api_key = '4ba806333269493cbf1142537231905'
  const [weather, setWeather] = useState<WeatherProps>({} as WeatherProps)
  const [capitals, setCapitals] = useState<CapitalProps[]>([])
  const [weatherCity, setWeatherCity] = useState('Vitoria')
  const cities = [
    'Vitoria,Brazil',
    'Rio de Janeiro,Brazil',
    'São Paulo,Brazil',
    'Belo Horizonte,Brazil',
    'Belem,Brazil',
    'Salvador,Brazil',
    'Curitiba,Brazil',
    'Fortaleza,Brazil',
    'Manaus,Brazil',
    'Joao Pessoa,Brazil',
    'Rio Branco,Brazil',
    'London,UK',
    'New York,USA',
    'Tokyo,JP'
  ];

  async function getCapitals() {
    try {
      const promises = cities.map(city =>
        api.get(`/forecast.json?key=${api_key}&country_name=Brazil&q=${city}&lang=pt`)
      )
      //console.log(await promises)
      //setCapital([...promises[0]])

      const responses = await Promise.all(promises)
      const weatherData = responses.map(response => response.data)
      if (weatherData) {
        setCapitals(weatherData)
      }
      console.log()

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getWeather() {
      const response =
        await api.get(`/forecast.json?key=${api_key}&country_name=Brazil&q=${weatherCity}&lang=pt&days=5`)

      if (response.data) {
        //console.log('passou aqui')
        setWeather(response.data)
        //console.log(weather)


      }
    }
    getCapitals()
    getWeather()
  }, [weatherCity])


  return (
    <Container variant={weather?.current?.is_day}>
      <Title>
        Previsão do Tempo
      </Title>

      {weather.current && (
        <Forecast weather={weather} />
      )}
      <SearchBar>
        <input
          onChange={(e) => setWeatherCity(e.target.value)}
          type="text"
          placeholder="Insira aqui o nome da cidade"
        />
        <BsSearch />
      </SearchBar>

      {/* {capitals.length > 0 && (
        <div>
          {capitals.map((capital) => (
            <div key={capital.location.name}>
              <span>{capital.location.name}</span>
              <span>{capital.forecast.forecastday[0].day.maxtemp_c} - {capital.forecast.forecastday[0].day.mintemp_c}</span>
            </div>
          ))}
        </div>
      )} */}

      {weather.current && (
        <ListOfCapital capitals={capitals} />
      )}

    </Container>
  )
}
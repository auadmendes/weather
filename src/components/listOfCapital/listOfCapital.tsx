
import {
  Container,
  Line,
  Cities,
  Title,
  Capitals,
  Titles,
  MaxMin,
  CapitalContent,
  CapitalName,
  Title1,
  Title2
} from "./styles";


interface CapitalProps {
  capitals: {
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
  }[]
}
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

export function ListOfCapital({ capitals }: CapitalProps) {
  return (
    <Container>

      <Line />

      <Title>
        <span>
          Capitais
        </span>
      </Title>

      <Cities>
        <Titles>
          <Title1>
            <span>Max</span>
            <span>Min</span>
          </Title1>
          <Title2>
            <span>Max</span>
            <span>Min</span>
          </Title2>

        </Titles>

        <Capitals>
          {capitals.map((capital) => (
            <CapitalContent key={capital.location.name} variant={capital.current.is_day}>
              <MaxMin>
                <span>
                  <AiOutlineArrowUp />
                  {capital.forecast.forecastday[0].day.maxtemp_c}º
                </span>

                <span>
                  <AiOutlineArrowDown />
                  {capital.forecast.forecastday[0].day.mintemp_c}º
                </span>
              </MaxMin>

              <CapitalName>
                <span>{capital.location.name}</span>
              </CapitalName>
            </CapitalContent>
          ))}


        </Capitals>
      </Cities>

    </Container>
  )
}
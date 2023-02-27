import { FormEvent, useState } from "react"
import { APIInformations } from "./components/APIInformations"
import { api } from "./lib/axios"
import { AppContainer, Card } from "./styles/pages/app"

export interface MoviesInformations {
  Poster: string;
  Title: string;
  imdbRating: number;
  Rated: number;
  Year: number;
  Runtime: string;
  Genre: string;
  Plot: string;
  Actors: string;
}

export const App = () => {
  const [movie, setMovie] = useState('')
  const [data, setData] = useState<MoviesInformations>({} as MoviesInformations)

//  console.log(data)
  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    const response = await api.get(
      `${movie}&apikey=1efc44d6`
    )

    setData(response.data)
  }

  return (
    <AppContainer>
      <Card>
        <form onSubmit={handleSearch}>
          <input 
            type="text"
            onChange={(e) => setMovie(e.target.value)} 
            value={movie}
          />
          <button>Search</button>
        </form>
        <APIInformations data={data} />
      </Card>
    </AppContainer>
  )
}


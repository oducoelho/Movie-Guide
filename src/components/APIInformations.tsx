import { MoviesInformations } from "../App";

interface informations {
  data: MoviesInformations
}

export const APIInformations = ({data}: informations) => {
  
  return (
    <div>
      <img src={data.Poster} alt="Poster do filme" />
      <h1>{data.Title}</h1>
      <h1>{data.Year}</h1>
      <h1>{data.Actors}</h1>
      <h1>{data.Genre}</h1>
      <h1>{data.Plot}</h1>
      <h1>{data.Rated}</h1>
      <h1>{data.Runtime}</h1>
      <h1>{data.imdbRating}</h1>
    </div>  
  )
}
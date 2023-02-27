import { MoviesInformations } from "../App";
import { Error, Genero, InformationsContainer, InformationsPartOne, OtherInformations, PartOne, PartTwo } from "../styles/pages/APIInformations";
import Start from '../assets/star-icon.svg'

interface informations {
  data: MoviesInformations
}

export const APIInformations = ({data}: informations) => {
  
  return (
    <>
    {
      data.Error === 'Movie not found!' && data.Title === ''
      ?
      <Error>{data.Error}</Error>
      :
      <InformationsContainer>
        <PartOne>
          <img src={data.Poster} alt="Poster do filme" />
          <InformationsPartOne>
            <h1>{data.Title}</h1>
            <span><img src={Start} alt="" />{data.imdbRating}</span>
            <OtherInformations>
              <span>{data.Rated}</span>
              <span>{data.Year}</span>
              <span>{data.Runtime}</span>
            </OtherInformations>
            <Genero>
              <div>{data.Genre}</div>
            </Genero>
          </InformationsPartOne>
        </PartOne>
        <PartTwo>
          <div>
            <p>Plot:</p>
            <span>{data.Plot}</span>
          </div>
          <div>
            <p>Cast:</p>
            <span>{data.Actors}</span>
          </div>
        </PartTwo>
      </InformationsContainer>  
    }
    </>
  )
}
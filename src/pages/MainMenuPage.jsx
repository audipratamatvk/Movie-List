import { useEffect } from "react"
import Card from "../components/Card"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../features/movieSlice";

export default function MainMenuPage() {
  const dispatch = useDispatch()
  const dataMovie = useSelector((state) => state.movie.movies)
  useEffect(() => {
    dispatch(fetchMovies({ query: "man" }))
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4">
        <div id="listmovie" className="flex flex-wrap gap-12 justify-center">
          {
            dataMovie.map((movie, i) => <Card key={i} menu={movie} />)
          }
        </div>
      </div>
    </div>
  )
}
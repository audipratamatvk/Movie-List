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
    <div className="flex flex-col items-center">
      <div className="flex flex-col p-4">
        <div id="listmovie" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {
            dataMovie.map((movie, i) => <Card key={i} menu={movie} />)
          }
        </div>
      </div>
    </div>
  )
}
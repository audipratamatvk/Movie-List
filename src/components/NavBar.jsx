import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movieSlice";

export default function NavBar() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const doSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchMovies({ query }))
    setQuery('')
  }

  const queryChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <nav className="bg-white border-gray-200 shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://imdb.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/300px-IMDB_Logo_2016.svg.png" className="h-8" alt="Imdb Logo" />
        </a>
        <form onSubmit={doSubmit}>
          <div className="flex">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" value={query} onChange={queryChange} id="search-navbar" className="block w-full p-1 ps-10 text-sm border-2 text-gray-900 focus:outline-none rounded-lg bg-gray-50 border-gray-300 hover:border-amber-300 focus:ring-2 ring-amber-300 focus:ring-opacity-50" placeholder="Search..." />
            </div>
          </div>
        </form>
      </div>
    </nav >
  )
}
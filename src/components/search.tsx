import { useEffect, useState } from "react"
import { SearchIcon } from "./icon"

function Search({ setSearch }:{setSearch: any}) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        setSearch(title)
    }, [setSearch, title])

    return (
        <form className="w-full">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 sm:ps-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input value={title} onChange={e => setTitle(e.target.value)} type="search" id="search" className="block w-full p-1 sm:p-3 ps-7 sm:ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Поиск" required />
            </div>
        </form>
    )
}

export default Search

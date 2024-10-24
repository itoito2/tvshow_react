import { useState } from 'react';
import './SearchBar.css';
import TVShowList from '../TVShowList/TVShowList';
import Loading from '../Loading/Loading';

function SearchBar() {
    const [search_term, set_search_term] = useState("")
    const [search_res, set_search_res] = useState([])
    const [filter, set_filter] = useState("")
    const [is_loading, set_is_loading] = useState(false)

    const fetch_data = async() => {
        set_is_loading(true)
        if(search_term !== "") {
            try {
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search_term}`)
                if(!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const result = await response.json()
                set_search_res(result)
            } catch(e) {
                console.log("Error occurred:", e)
            }
        }
        set_is_loading(false)
    }

    const apply_filter = () => {
        let filtered_shows = [...search_res]

        switch (filter) {
            case "average_rating":
                filtered_shows = filtered_shows.sort((a, b) => {
                    const ratingA = a.show.rating?.average || 0;
                    const ratingB = b.show.rating?.average || 0;
                    return ratingB - ratingA;  // Sort in decreasing order
                });
                break

            case "ongoing":
                filtered_shows = filtered_shows.filter(tvshow => tvshow.show?.status === "Running")
                break

            default:
                break
        }

        return filtered_shows
    }

    return(
        <div>
            <h4>Search for a TV Show: </h4>
            <input type="text" value={search_term} onChange={e => set_search_term(e.target.value)} name="search_term"/> <br/>
            Filter by: <select onChange={e => set_filter(e.target.value)}>
                <option value="" selected>None</option>
                <option value="average_rating">Average Rating</option>
                <option value="ongoing" >Ongoing</option>
            </select><br/>
            <button onClick={() => fetch_data()}>Search</button>
            {is_loading && <Loading />}
            {
                search_res.length > 0 ? (
                    filter.length > 0 ? <TVShowList shows={apply_filter()}/> : <TVShowList shows={search_res} />
                ) : ""
            }
        </div>
    )
}

export default SearchBar;

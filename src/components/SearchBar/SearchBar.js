import { useState } from 'react';
import './SearchBar.css';
import TVShowList from '../TVShowList/TVShowList';
import Loading from '../Loading/Loading';

function SearchBar() {
    const [search_term, set_search_term] = useState("")
    const [search_res, set_search_res] = useState([]);
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
                set_is_loading(false)
            } catch(e) {
                console.log("Error occurred:", e)
            }
        }
    }

    return(
        <div>
            <h4>Search for a TV Show: </h4>
            <input type="text" value={search_term} onChange={e => set_search_term(e.target.value)} name="search_term"/> <br/>
            <button onClick={() => fetch_data()}>Search</button>
            {is_loading && <Loading />}
            {
                search_res.length > 0 ? <TVShowList shows={search_res} />  : ""
            }
        </div>
    )
}

export default SearchBar;
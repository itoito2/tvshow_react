import { useParams } from 'react-router-dom';
import './TVShowDetail.css';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

function TVShowDetail() {
    const [tvshow, set_tvshow] = useState({})
    const [is_loading, set_is_loading] = useState(false)

    const { id } = useParams()

    useEffect(() => { fetch_data() }, [])

    const fetch_data = async() => {
        set_is_loading(true)
        try {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
            if(!response.ok) {
                throw new Error("Failed to fetch data")
            }
            const result = await response.json()
            set_tvshow(result)
            set_is_loading(false)
        } catch(e) {
            console.log("Error occurred:", e)
        }
    }

    return(
        <div className="tvshow-detail">
            {is_loading && <Loading/>}
            <div className="upper">
                <h1>{tvshow.name}</h1>
            </div>
            <div className="middle">
                <div className="left">
                    <img src={tvshow.image?.medium} alt={tvshow.name} />
                </div>
                <div className="right">
                    <h2>Average rating: {tvshow.rating?.average ? tvshow.rating?.average : "-"} </h2>
                    <h2>Genres: {tvshow.genres?.map((genre, index) => <a>{genre} </a>)}</h2>
                </div>
            </div>
            <div className="bottom">
                <h4>{tvshow.summary}</h4>
                <h3>Official site: {tvshow.network?.name ? <a href={tvshow.officialSite}>{tvshow.network?.name}</a> : "-"}</h3>
            </div>
        </div>
    )
}

export default TVShowDetail;
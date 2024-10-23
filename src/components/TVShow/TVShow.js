import { Link } from 'react-router-dom';
import './TVShow.css';

function TVShow( {tvshow} ) {
    return(
        <div className="tvshow-one">
            {console.log(tvshow.show.image?.medium)}
            <Link to={`/tv-show-details/${tvshow.show.id}`}><h1>{tvshow.show.name}</h1></Link>
            <img src={tvshow.show?.image?.medium} alt={`${tvshow.show.name} medium size`} />
            <h4>Genres: {tvshow.show.genres.map((genre, index) => <a>{genre} </a>)}</h4>
            <h4>Average Rating: {tvshow.show.rating.average ? tvshow.show.rating.average : "-"}</h4>
            {
                tvshow.show.network?.name ? <h6>Watch on <a href={tvshow.show.officialSite}>{tvshow.show.network?.name}</a></h6> : <h6>No data about streaming</h6>
            }
        </div>
    )
}

export default TVShow;
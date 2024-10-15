import './TVShow.css';

function TVShow( {tvshow} ) {
    return(
        <div className="tvshow-one">
            {console.log(tvshow.show.image?.medium)}
            <h1>{tvshow.show.name}</h1>
            <img src={tvshow.show?.image?.medium} alt={`${tvshow.show.name} medium size`} />
            <h4>Genres: {tvshow.show.genres}</h4>
            <h4>Average Rating: {tvshow.show.rating.average}</h4>
            <h6>Watch on <a href={tvshow.show.officialSite}>{tvshow.show.network?.name}</a></h6>
        </div>
    )
}

export default TVShow;
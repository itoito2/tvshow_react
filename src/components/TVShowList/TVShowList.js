import TVShow from '../TVShow/TVShow';
import './TVShowList.css';

function TVShowList( {shows} ) {
    return(
        <div className="tvshows">
            {
                shows.map((show, index) => <TVShow key={index} tvshow={show} />)
            }
        </div>
    )
}

export default TVShowList;
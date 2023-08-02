import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from "react";

function Detail() {
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovies = async() => {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
      const json = await response.json();
      console.log(json.data.movie);
      setMovie(json.data.movie);
      setLoading(false);
    };
  
    useEffect(() => {
      getMovies();
    }, []);

    return (
        <div>
            <h1>
                <Link to="/">
                Back to List
                </Link>
            </h1>
            <hr></hr>
            {loading ? (
            <strong>Loading</strong> 
            ) : (
                <div>
                    <img src={movie.medium_cover_image}></img>
                    <h3>{movie.title}</h3>
                    <p>{movie.description_full}</p>
                </div>

            )}
        </div>
    );
}

export default Detail;
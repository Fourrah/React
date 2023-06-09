import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Detail</h1>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <div className={styles.details}>
            {<h2>{details.title_long}</h2>}
        </div>
      )}
    </div>
  );
}

export default Detail;

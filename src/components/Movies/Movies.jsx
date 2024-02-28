import movies from '../../assets/data/movies.js'
import styles from './Movies.module.css'
import Movie from '../Movie/Movie'

const Movies = () => {
  return (
    <section>
      <h1>Movie Database</h1>
      <div className={styles.movies}>
        {movies.map((movie, index) => {
          return (
            <Movie
              movie={movie}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Movies

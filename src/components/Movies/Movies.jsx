import movies from '../../assets/data/movies.js'
import styles from './Movies.module.css'
import Movie from '../Movie/Movie'

const Movies = () => {
  return (
    <section className={styles.movies}>
      {movies.map((movie, index) => {
        return (
          <Movie
            movie={movie}
            key={index}
          />
        )
      })}
    </section>
  )
}

export default Movies

import styles from './Movie.module.css'
import Stars from '../Stars/Stars'

const Movie = ({ movie: { title, year, director, duration, genre, rate } }) => {
  return (
    <article className={styles.movie}>
      <h2>{title}</h2>
      <p>{year}</p>
      <h3>{director}</h3>
      <p>{duration}</p>
      <div className={styles.movie__genre}>
        {genre.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
      <Stars rate={rate} />
      <p>{rate}</p>
    </article>
  )
}

export default Movie

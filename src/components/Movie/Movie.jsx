import styles from './Movie.module.css'

const Movie = ({ movie: { title, year, director, duration, genre, rate } }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{year}</p>
      <h3>{director}</h3>
      <p>{duration}</p>
      {genre.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        )
      })}
      <p>{rate}</p>
    </article>
  )
}

export default Movie

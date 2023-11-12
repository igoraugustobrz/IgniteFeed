import style from './style.module.css';

export const Post = () => {
  return (
    <>
      <article className={style.post}>
        <header>
          <div className={style.author}>
            <img
              src='https://github.com/igoraugustobrz.png'
              className={style.avatar}
            />

            <div className={style.authorInfo}>
              <strong>Igor Augusto</strong>
              <span>Full-Stack Developer</span>
            </div>
          </div>

          <time
            dateTime='2023-11-12'
            title='12 de Dezembro às 05:39h'
          >
            Publicado há 1h
          </time>

        </header>

        <div className={style.content}>

          <p>Fala galeraa 👋🏻</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Discover, curso da Rocketseat. O nome do projeto é DevLinks 🚀✨</p>

          <p className={style.spacing}>
            👉🏻
            <a
              href='https://iaugusto-devlinks.vercel.app/'
              rel='noreferrer'
              target='_blank'
            >
              iaugusto-devlinks.vercel.app/
            </a>
          </p>

          <p className={style.spacing}>
            <a href="#">#novoprojeto</a>
            <a href="#">#discover</a>
            <a href="#">#rocketseat</a>
          </p>
        </div>
      </article>
    </>
  )
}
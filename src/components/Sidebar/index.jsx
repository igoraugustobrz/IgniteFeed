import style from './style.module.css';

export const Sidebar = () => {
  return (
    <>
      <aside className={style.sidebar}>
        <img
          src='https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className={style.cover}
        />

        <div className={style.profile}>
          <strong>
            Igor Augusto
          </strong>
          <span>Full-Stack Developer</span>

        </div>

        <footer>
          <a href="#">
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
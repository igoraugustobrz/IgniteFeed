import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import style from './style.module.css';

export const Comment = () => {
  return (
    <>
      <div className={style.comment}>
        <Avatar 
        hasBorder={false} 
        src="https://github.com/igoraugustobrz.png" 
        />

        <div className={style.commentBox}>
          <div className={style.commentContent}>
            <header>
              <div className={style.authorAndTime}>
                <strong>Igor Augusto</strong>
                <time
                  dateTime='2023-11-12'
                  title='12 de Dezembro às 05:39h'
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button title='Excluir comentário'>
                <Trash size={24} />
              </button>

            </header>

            <p>Muito bom Igor, parabéns!! 👏🏻👏🏻</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
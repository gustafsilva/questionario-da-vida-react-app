import React from 'react'
import { FaHeart, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a className={'icon'} href="https://www.github.com/gustafsilva/todoapp-gatsby"><FaGithub />

          </a><strong>Questinário da Vida</strong> feito por <a href="https://docs.wixstatic.com/ugd/2dfb33_9899a5db9dd84dd0a218c26c11de37fd.pdf">TCC Para Todos</a>.
  
          O código-fonte está licenciado <a href="https://github.com/gustafsilva/todoapp-gatsby/blob/master/LICENSE"> MIT</a>
          <i className="icon has-text-danger"><FaHeart /></i>
        </p>
      </div>
    </footer>
  )
}

export default Footer

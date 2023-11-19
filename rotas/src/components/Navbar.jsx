import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
          <Link to={`/`}>Rotas</Link>
        </h2>
        <ul>
          <li>
          <Link to={`/`}>Home</Link>
          </li>
          <li>
          <Link to={`/tasks`}>Tarefas</Link>
          </li>
          <li>
          <Link to={`/about`}>Sobre</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
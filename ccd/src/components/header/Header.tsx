import './header.css';
import Button from "../input/button/Button";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function navegar(page:string) {
    navigate(`${page}`);
  }

  return (
    <header>
      <h1>CCS</h1>
      <div className='container-info-header'>
        <nav className='nav-header'>
          <a onClick={() => navegar("/")}>Home</a>
          <a onClick={() => navegar("/about")}>Sobre</a>
          <a onClick={() => navegar("/contact")}>Contate-nos</a>
        </nav>
        <Button transparent={false} label="Métricas" onClick={() => { }} />
      </div>
    </header>
  );
};

import './header.css';
import Button from "../input/button/Button";

export default function Header() {
  return (
    <header>
      <h1>CCS</h1>
      <div className='container-info-header'>
        <nav className='nav-header'>
          <a href="/html/">Home</a>
          <a href="/css/">Sobre</a>
          <a href="/js/">Contate-nos</a>
        </nav>
        <Button label="Métricas" onClick={() => { }} />
      </div>

    </header>
  );
};

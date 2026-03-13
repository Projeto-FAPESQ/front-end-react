import './header.css';
import Button from "../input/button/Button";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from "../../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function navegar(page: string) {
    navigate(page);
    setMenuOpen(false); 
  }

  return (
    <header>
      <img className='logo' src={logo} alt="logo do projeto" />
     
      <div className={`container-info-header ${menuOpen ? "open" : ""}`}>
        <nav className="nav-header">
          <a onClick={() => navegar("/")}>Home</a>
          <a onClick={() => navegar("/about")}>Sobre</a>
          <a onClick={() => navegar("/contact")}>Contate-nos</a>
          <a onClick={() => navegar("/global-metrics")}>IGS</a>
        </nav>
        <Button onClick={() => navegar("/metrics")} transparent={false} label="Métricas" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
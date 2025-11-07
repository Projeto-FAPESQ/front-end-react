import './footer.css';
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>
              <Phone size={18} className="icon" />
              +99 99 9999-9999
            </li>
            <li>
              <Mail size={18} className="icon" />
              ExemploLegal@Mail.Com
            </li>
            <li>
              <MapPin size={18} className="icon" />
              147, R. José Antônio Da, R. José Leôncio Da Silva, 300 – Lot. Jardim Oasis, Cajazeiras - PB, 58900-000
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Métricas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>O Que Fazemos?</h3>
          <p>
            Visando analisar o nível de investimento público em alguns municípios paraibanos – Patos, Pombal,
            Sousa, Cajazeiras e Monte Horebe – a partir de dados contábeis disponibilizados pelo Tribunal de
            Contas do Estado e pelos portais de transparência das prefeituras, foi realizada a construção deste
            WebSite, buscando a transparência para todos os cidadãos da Paraíba de forma fácil e acessível.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>CCS 2025 © Todos Os Direitos Reservados</p>
      </div>
    </footer>
  );
}
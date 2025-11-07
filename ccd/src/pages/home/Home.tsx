import React from "react";
import './home.css';
import imagem from "../../assets/group.png"
import imagemLoopis from "../../assets/loopis-img.jpg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/input/button/Button";

const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <section id="first-hero" className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Cidades e Comunidades Sustentáveis</h1>
          <p>
            Uma ferramenta para o acompanhamento do objetivo de desenvolvimento
            sustentável 11
          </p>

          <div className="hero-buttons">
            <Button transparent={false} label="Realizar Métricas" />
            <Button transparent={true} label="Sobre Nós" />
          </div>
        </div>

        <span className="city-label">Cajazeiras</span>
      </section>


      <section id="about" className="hero">

        <div className="hero-about-container">
          <div className="hero-about-section">
            <h2>– Sobre</h2>
            <h1>O projeto cidades e comunidades sustentáveis</h1>
            <p>
              Visando analisar o nível de investimento público em alguns municípios paraibanos – Patos, 
              Pombal, Sousa, Cajazeiras e Monte Horebe – a partir de dados contábeis disponibilizados pelo 
              Tribunal de Contas do Estado e pelos portais de transparência das prefeituras, foi 
              realizada a construção deste WebSite, buscando a transparência para todos os cidadãos da 
              paraíba de forma fácil e acessível.
            </p>
          </div>
          <div className="hero-about-image">
            <img src={imagem} alt="imagem de pessoas dando a mão" />
          </div>

        </div>

      </section>

      <section id="how-was-made" className="hero">

        <div className="hero-about-container">
          <div className="hero-about-section">
            <h2>– Como foi feito?</h2>
            <p>
             Com o desenvolvimento por parte da empresa Junior Loopis, a partir de um edital da Fapesq, 
             criamos ferramentas para buscar valores em portais de transparência dos demais municípios análisados,
              dessa forma, filtrando os dados e os pondo neste portal de transparência, para que possa ser acessado 
              por qualquer cidadão de forma simples, rápida e intuítiva.
            </p>
          </div>
          <div className="hero-about-image">
            <img src={imagemLoopis} alt="imagem de pessoas dando a mão" />
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
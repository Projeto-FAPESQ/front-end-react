import './home.css';
import imagem from "../../assets/group.jpg"
import imagemLoopis from "../../assets/loopis-img.jpg";
import imgFapesq from "../../assets/img-groups/fapesq.png";
import imgIfpb from "../../assets/img-groups/ifpb.jpg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/input/button/Button";
import Card from "../../components/card/Card";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { backgrounds, type BackgroundType } from './backgrounds';

export default function Home() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);
  const [actualBackground, setActualBackground] = useState<BackgroundType>(backgrounds[0]);

  function navegar(page: string) {
    navigate(`${page}`);
  }

  useEffect(() => {
  const interval = setInterval(() => {
    setFade(true);

    setTimeout(() => {
      setActualBackground((prev) => {
        const next = backgrounds.find(e => e.id === prev.id + 1);
        return next ?? backgrounds[0];
      });

      setFade(false);
    }, 1000); 
  }, 8000); 

  return () => clearInterval(interval);
}, []);

  return (
    <div>
      <Header />

      <section id="first-hero" className="hero">
        <img className={fade ? "fade-out" : ""} key={actualBackground.id} src={actualBackground.url} alt="background" />

        <div className={`overlay ${fade ? "fade-out-overlay" : ""}`}></div>

        <div className="hero-content">
          <h1>Observatório Cidades Sustentáveis</h1>
          <p>
            Uma ferramenta para o acompanhamento do objetivo de desenvolvimento
            sustentável 11
          </p>

          <div className="hero-buttons">
            <Button onClick={() => navegar("/metrics")} transparent={false} label="Realizar Métricas" />
            <Button onClick={() => navegar("/about")} transparent={true} label="Sobre Nós" />
          </div>
        </div>

        <span className="city-label">{actualBackground.name}</span>
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

      <section className="municipios">
        <div className="municipios-header">
          <h1>Municípios analisados</h1>
          <p>
            A princípio, a análise foi realizada em uma quantidade limitada de municípios do estado da Paraíba
          </p>
        </div>

        <div className="municipios-grid">
          <Card
            title="Cajazeiras"
          />

          <Card
            title="Patos"
          />

          <Card
            title="Sousa"
          />

          <Card
            title="Pombal"
          />

          <Card
            title="Monte Horebe"
          />

        </div>

        <Button onClick={() => navegar("/metrics")} transparent={false} label="Visualizar métricas" />
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
            <img src={imagemLoopis} alt="imagem da empresa junior Loopis" />
          </div>

        </div>

      </section>

      <section id="sponsors" className="hero">

        <div className="hero-sponsors-content">
          <h1>Realizadores</h1>

          <div className="hero-imgs-group">
            <img src={imagemLoopis} alt="" />
            <img src={imgFapesq} alt="" />
            <img src={imgIfpb} alt="" />
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};
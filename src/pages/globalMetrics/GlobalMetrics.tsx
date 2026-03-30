import './globalMetrics.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import Button from '../../components/input/button/Button';

export default function GlobalMetrics() {
  const navigate = useNavigate();

  function navegar(page: string) {
    navigate(page);
  }

  const dados = [
    { cidade: "Cajazeiras", valor: 38.31 },
    { cidade: "Patos", valor: 54.5 },
    { cidade: "Sousa", valor: 34.1 },
    { cidade: "Pombal", valor: 42.68 },
    { cidade: "Monte Horebe", valor: 33.53 },
  ];

  const melhor = dados.reduce((prev, curr) =>
    curr.valor > prev.valor ? curr : prev
  );

  const media =
    dados.reduce((acc, curr) => acc + curr.valor, 0) / dados.length;

  return (
    <div className="global-metrics">
      <Header />

      <section className="metodologic">
        <h1>índice Global de Sustentabilidade</h1>
        <h2>Metodologia</h2>

        <p>
          O sistema foi concebido como uma ferramenta tecnológica para coleta,
          processamento e análise de indicadores de sustentabilidade urbana. O
          desenvolvimento é conduzido por alunos da Empresa Júnior
          <strong> LOOPIS – Soluções Tecnológicas</strong>, vinculada ao curso
          de Análise e Desenvolvimento de Sistemas do Instituto Federal da
          Paraíba (IFPB), Campus Cajazeiras.
        </p>

        <p>
          A coleta de dados é realizada por meio de um script desenvolvido em
          Python, utilizando a técnica de <strong>Web Scraping</strong>, que
          permite a extração automatizada de dados estruturados provenientes de
          diferentes fontes públicas.
        </p>

        <p>
          Após a coleta, os dados são processados e integrados a uma
          <strong> API de dados</strong> desenvolvida em Node.js. Essa API é
          responsável por armazenar as informações em um banco de dados
          MongoDB, que utiliza um modelo de documentos no formato chave-valor,
          permitindo maior flexibilidade no armazenamento e recuperação das
          informações.
        </p>

        <p>
          Posteriormente, os dados são analisados e transformados em
          indicadores relacionados ao <strong>Objetivo de Desenvolvimento
            Sustentável 11</strong> da Agenda 2030, que trata da construção de
          cidades e comunidades sustentáveis.
        </p>

        <p>
          Para disponibilização pública, foi desenvolvido um sistema web em
          React que permite a visualização, análise e download dos dados
          coletados. A plataforma apresenta os indicadores em forma de
          progressões e tendências, possibilitando acompanhar, de forma
          atualizada, o nível de desenvolvimento sustentável dos municípios
          analisados.
        </p>
      </section>

      <section className="metodologic">
        <h2>Resultados</h2>
        <p>
          Após a coleta e análise dos dados, foi possível desenvolver uma poderosa
          ferramenta de avaliação. Ao clicar em <strong>Visualizar Métricas</strong>,
          você terá acesso a um painel detalhado que apresenta todos os indicadores
          construídos, permitindo explorar os resultados de forma clara para cada
          município analisado.
        </p>

        <p>
          A partir desses indicadores, foi calculado o índice geral de sustentabilidade
          para cada cidade participante do estudo, conforme apresentado abaixo:
        </p>

        <div className="summary">
          <div>
            <span>Média geral: </span>
            <strong>{media.toFixed(2)}%</strong>
          </div>
          <div>
            <span>Município com as melhores notas: </span>
            <strong>{melhor.cidade}</strong>
          </div>
        </div>

       

        <div className="municipios-grid">
          {dados.map((item) => (
            <Card
              key={item.cidade}
              title={item.cidade}
              text={`${item.valor}%`}
              highlight={item.cidade === melhor.cidade}
            />
          ))}
        </div>

        <div className="actions">
          <Button
            onClick={() => navegar("/metrics")}
            transparent={false}
            label="Visualizar Métricas"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import logoLoopis from "../../assets/loopis-img.jpg";
import './about.css';
import TeamCard from "../../components/team-card/TeamCard";
import alec from "../../assets/img-team/alec.png";
import eva from "../../assets/img-team/eva.png";
import gustavo from "../../assets/img-team/gustavo.png";
import lopes from "../../assets/img-team/lopes.jpg";
import kahe from "../../assets/img-team/kahe.jpg";
import islan from "../../assets/img-team/islan.png";

export default function About() {

  const equipe = [
    {
      nome: "Loopis Jr.",
      imagem: logoLoopis,
      descricao: "Empresa júnior designada para realizar o serviço.",
      contato: "loopisjr@gmail.com",
    },
    {
      nome: "Alec Van França",
      imagem: alec,
      descricao: "Idealizador da aplicação e orientador do projeto.",
      contato: "alecvan.franca@ifpb.edu.br",
    },
    {
      nome: "Eva Maria Campos",
      imagem: eva,
      descricao: "Coorientadora do projeto.",
      contato: "eva@ifpb.edu.br",
    },
        {
      nome: "Gustavo Lopes Lemos",
      imagem: lopes,
      descricao: "Bolsista e Desenvolvedor do back-end",
      contato: "gugalopes.dev@gmail.com",
    },
    {
      nome: "Gustavo P. Marcena da Cruz",
      imagem: gustavo,
      descricao: "Bolsista e Desenvolvedor do front-end",
      contato: "gustavopmarcena@outlook.com",
    },
    {
      nome: "Islan Pereira de Oliveira",
      imagem: islan,
      descricao: "Bolsista e Desenvolvedor do back-end",
      contato: "islanpereiradeoliveira@gmail.com",
    },
    {
      nome: "Kahe Mikayas Estrela Maciel",
      imagem: kahe,
      descricao: "Bolsista e Desenvolvedor do back-end",
      contato: "kahe.mikayas@gmail.com",
    },
  ];

  return (
    <>
      <Header />
      <section className="sobre-nos">
        <h2>Sobre nós</h2>
        <p className="subtitulo">Conheça a nossa equipe</p>

        <div className="cards-container">
          {equipe.map((membro, index) => (
          <TeamCard key={index} title={membro.nome} text={membro.descricao} img={membro.imagem} contact={membro.contato} />
        ))}
          
        </div>
      </section>
      <Footer />
    </>
  );
};

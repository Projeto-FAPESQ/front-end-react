import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header/>
      <main style={{ padding: "2rem", flex: 1 }}>
        <h2>Bem-vindo à página de sobre!</h2>
        <p>Essa é a página de metricas</p>
      </main>
      <Footer />
    </div>
  );
};

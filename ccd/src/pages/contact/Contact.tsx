import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header/>
      <main style={{ padding: "2rem", flex: 1 }}>
        <h2>Contato</h2>
        <p>Formulário ou informações de contato.</p>
      </main>
      <Footer />
    </div>
  );
};

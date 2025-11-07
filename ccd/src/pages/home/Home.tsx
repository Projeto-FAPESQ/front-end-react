import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minWidth: "100%", minHeight: "100vh" }}>
      <Header/>
      <main style={{ padding: "2rem", flex: 1 }}>
        <h2>Bem-vindo à página inicial!</h2>
        <p>Essa é a página principal do sistema.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Metrics: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header/>
      <main style={{ padding: "2rem", flex: 1 }}>
        <h2>Bem-vindo à página de métricas!</h2>
        <p>Essa é a página de metricas</p>
      </main>
      <Footer />
    </div>
  );
};

export default Metrics;
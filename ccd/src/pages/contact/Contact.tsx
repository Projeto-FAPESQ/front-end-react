import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Input from "../../components/input/form/Input";
import './contact.css';
import Button from "../../components/input/button/Button";

export default function Contact() {
  return (
    <div >
      <Header />
      <main className="contact-main">
        <div>
          <h1>Fale conosco</h1>
        </div>
        <div className="form-container">
          <div className="double-names">
            <Input label="Primeiro nome" placeHolder="Primeiro Nome" type="input" onChange={() => { }} />
            <Input label="Sobrenome" placeHolder="Sobrenome" type="input" onChange={() => { }} />
          </div>
          <Input label="Email" placeHolder="Ex JohnDoe214@gmail.com" type="email" onChange={() => { }} />
          <Input label="Comentário" textArea={true} onChange={() => { }} />
          <div className="submit-div">
            <Button label="Enviar" onClick={() => { }} />
          </div>
        </div>




      </main>
      <Footer />
    </div>
  );
};

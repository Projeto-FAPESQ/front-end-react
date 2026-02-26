import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Input from "../../components/input/form/Input";
import './contact.css';

export default function Contact() {
  return (
    <div>
      <Header />

      <main className="contact-main">
        <div>
          <h1>Fale conosco</h1>
        </div>

        <form
          className="form-container"
          action="https://formsubmit.co/precisodoemail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />


          <div className="double-names">
            <Input
              label="Primeiro nome"
              placeHolder="Primeiro Nome"
              type="text"
              name="primeiro_nome"
            />
            <Input
              label="Sobrenome"
              placeHolder="Sobrenome"
              type="text"
              name="sobrenome"
            />
          </div>

          <Input
            label="Email"
            placeHolder="Ex John@gmail.com"
            type="email"
            name="email"
          />

          <Input
            label="Comentário"
            textArea={true}
            name="mensagem"
          />

          <div className="submit-div">
            <button type="submit">
              Enviar
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

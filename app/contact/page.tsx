import SocialMediaLink from "@/components/SocialMediaLink";
import React from "react";
import { FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contato" className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="section-title">Contato</h2>
      <p className="section-paragraph">
        Ficarei feliz em conversar! Você pode me enviar uma mensagem pelo formulário
        abaixo ou falar diretamente pelas minhas redes.
      </p>

      {/* Redes sociais */}
      <div className="flex sm:flex-row flex-col justify-evenly items-center gap-6 mb-8 mx-auto">
        <a
          href="mailto:gustavoangelo06@hotmail.com"
          className="flex items-center gap-2 text-lg sm:text-xl text-blue-600 hover:text-blue-800 transition"
        >
          <FiMail /> gustavoangelo06@hotmail.com
        </a>
        
        <SocialMediaLink />
      </div>

      {/* Formulário */}
      <form
        action="https://formsubmit.co/gustavoangelo06@hotmail.com"
        method="POST"
        className="bg-gray-50 shadow-lg rounded-xl p-5 flex flex-col gap-4 border-blue-500 border-1"
      >
        {/* Configs FormSubmit */}
        {/* <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://seusite.com/obrigado" /> */}

        <div>
          <label className="label-title">Nome</label>
          <input
            type="text"
            name="name"
            required
            className="input-field"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label className="label-title">E-mail</label>
          <input
            type="email"
            name="email"
            required
            className="input-field"
            placeholder="Seu e-mail"
          />
        </div>

        <div>
          <label className="label-title">Mensagem</label>
          <textarea
            name="message"
            required
            rows={4}
            className="input-field"
            placeholder="Escreva sua mensagem..."
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-medium"
        >
          <FiSend /> Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default Contact;

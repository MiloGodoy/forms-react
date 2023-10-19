import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_rs4nxyt";
    const templateId = "template_vqubo9n";
    //3er parámetro
    const apiKey = "EMHETMK7QKzee6x9d";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <form ref={refForm} action="" onSubmit={handleSubmit} className="form--">
        <div className="header-contact">
          <h2>Contact Us</h2>
          <p>Please fill this form</p>
        </div>
        <fieldset className="field-name">
          <label className="simbol-required" name="name" htmlFor="">
            Name
          </label>
          <input
            name="user_name"
            type="text"
            placeholder="Ej: Kurt Cobain"
            required
          />
        </fieldset>
        <fieldset className="field-email">
          <label className="simbol-required" name="email" htmlFor="">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="milogodoy@hotmail.com"
            id="email"
            required
          />
        </fieldset>
        <fieldset className="field-message">
          <label className="simbol-required" htmlFor="">
            Message
          </label>
          <textarea
            maxLength="500"
            placeholder="type here your message"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </fieldset>
        <button className="btn-send">Enviar</button>
      </form>
    </div>
  );
}

export default ContactUs;

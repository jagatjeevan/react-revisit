import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const getValue = () => {
    console.log(name);
  };
  return (
    <article className="contact-form" data-testid="Contact">
      <header>Contact Component</header>
      <form onSubmit={getValue()}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="submit">
          <input type="submit" />
        </div>
      </form>
    </article>
  );
};

export default Contact;

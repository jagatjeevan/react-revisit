import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <article className="contact-form" data-testid="Contact">
      <header>Contact Component</header>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" required />
        <div className="submit">
          <input type="submit" />
        </div>
      </form>
    </article>
  );
};

export default Contact;

import React from "react";
import "./ErrorBoundaries.scss";

const ErrorBoundaries = (props) => (
  <article
    className="error-boundaries topic-container"
    data-testid="ErrorBoundaries"
  >
    <header>Error Boundaries</header>
    <section className="topic-body">
      <strong>Error Boundaries</strong> catch JavaScript errors anywhere in the
      application. Earlier if the application fails due to JS errors, the
      application could not recover, as a result the whole application crashes.
      {this.props.hello}
      <p>
        Below are the instances, which the Error Boundary do not catch errors
      </p>
      <ul>
        <li>Event Handlers</li>
        <li>
          Asynchronous code : SetTimeout or requestAnimationFrame callbacks
        </li>
        <li>Server side rendering</li>
        <li>Error throws in the error boundary itself</li>
      </ul>
    </section>
  </article>
);

export default ErrorBoundaries;

import React from "react";
import PropTypes from "prop-types";
import "./home.scss";

const Home = (props) => (
  <div className="home" data-testid="home">
    <header>home Component: {props.name}</header>
  </div>
);

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: "Say hello",
};

export default Home;

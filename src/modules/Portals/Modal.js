import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.classList = ["overlay"];
  }
  componentDidMount() {
    console.log("component did mount");
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      this.el
    );
  }
}

export default Modal;

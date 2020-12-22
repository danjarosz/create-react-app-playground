import React, { Component } from "react";
import clsx from "clsx";
import "./Button.css"; // Tell webpack that Button.js uses these styles
import styles from "./Button.module.scss"; // Import scss modules stylesheet as styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles

    const { handleClick, text } = this.props;

    const error = true;
    return (
      <button
        className={clsx("Button", error && styles.error)}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;

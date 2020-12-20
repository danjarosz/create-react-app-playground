import React, { Component } from "react";
import clsx from "clsx";
import "./Button.css"; // Tell webpack that Button.js uses these styles
import styles from "./Button.module.css"; // Import css modules stylesheet as styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles

    const error = true;
    return (
      <div className={clsx("Button", error && styles.error)}>
        Button component
      </div>
    );
  }
}

export default Button;

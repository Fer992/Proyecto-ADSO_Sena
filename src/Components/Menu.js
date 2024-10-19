import React from "react";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={styles.header}>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Ingreso Usuario</a>
          </li>
          <li>
            <a href="/about">Compra y Vende</a>
          </li>
          <li>
            <a href="/contact">Contactanos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>React Stock</div>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
  );
}

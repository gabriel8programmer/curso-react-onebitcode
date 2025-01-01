import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ display: "flex", gap: "1.5rem" }}>
      <Link to="/">Inicio</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/cart">Carrinho</Link>
      <Link to="/admin">Administração</Link>
    </header>
  );
}

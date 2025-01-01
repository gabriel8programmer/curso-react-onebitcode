import { Link, useLoaderData, useParams } from "react-router-dom";
import products from "../database.json";

export default function Product() {
  const product = useLoaderData();

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}

import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <div>Olá {user.name}. Bem Vindo!</div>
      <hr />
    </header>
  );
}

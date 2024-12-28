import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

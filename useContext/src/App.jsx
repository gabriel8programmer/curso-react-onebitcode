import Container from "./components/Container";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/userContext";

export default function App() {
  const user = {
    name: "João",
    email: "joao@gmail.com",
  };

  return (
    <div>
      <UserContext.Provider value={user}>
        <Header />
        <h1>Usando contexto no React</h1>
        <Container>
          <UserInfo />
        </Container>
      </UserContext.Provider>
    </div>
  );
}

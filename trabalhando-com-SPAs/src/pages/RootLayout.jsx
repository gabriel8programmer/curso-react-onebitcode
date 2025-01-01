import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <p>Esse é o layout principal!</p>
        <hr />
        <Outlet />
      </main>

      <hr />
      <footer>
        <p>Feito com react Router DOM</p>
      </footer>
    </>
  );
}

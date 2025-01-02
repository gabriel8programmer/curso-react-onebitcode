import { Outlet } from "react-router-dom";
import Header from "../components/header/";
import Footer from "../components/Footer/";

export default function RootLayout() {
  return (
    <>
      <Header />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

import StockItem from "../components/stockItem/";

export default function Home() {
  return (
    <>
      <section>
        <h1>Dashboard</h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StockItem text="Diversidade de itens" value={10} />
          <StockItem text="Inventário total" value={10} />
          <StockItem text="Itens Recentes" value={10} />
          <StockItem text="Itens acabando" value={10} />
        </div>
      </section>
    </>
  );
}

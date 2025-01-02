import styles from "./styles.module.css";

export default function stockItem({ text, value }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <div>{value}</div>
    </div>
  );
}

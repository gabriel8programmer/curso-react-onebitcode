
import styles from "./Card.module.css"

export default () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <img src="./poster.jpg" alt="" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h1 className={styles.cardTitle}>Pôster: Star Wars (1977)</h1>
                    <p className={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur consequatur exercitationem deleniti ipsum fuga ipsa error dolore mollitia nisi, natus eos dolorum accusantium maxime accusamus, cum ea cumque expedita officiis.</p>
                    <button className={styles.cardButton}>Comprar agora</button>
                </div>
            </div>
        </div>
    )
}
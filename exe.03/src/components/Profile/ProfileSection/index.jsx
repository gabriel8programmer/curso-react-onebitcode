
import styles from "./styles.module.css"

export default (props) => (
    <div className={styles.wrapper}>
        {props.children}
    </div>
)
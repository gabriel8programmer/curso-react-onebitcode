
import styles from "./styles.module.css"

export default (props) => {
    return (
        <h2 className={styles.wrapper}>
            {props.children}
        </h2>
    )
}
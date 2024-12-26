
import styles from "./styles.module.css"

export default (props) => {
    return (
        <a href={props.url} target='_blank' className={styles.button}>
            {props.children}
        </a>
    )
}
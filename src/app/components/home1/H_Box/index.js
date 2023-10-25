import styles from './H_Box.module.css'

export const H_Box = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.wrap}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

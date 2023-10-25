import styles from './box.module.css'

export const S_Box = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.wrap}>
                <div className={styles.img}>
                    <img width='50px' height='50px' src={props.img}></img>
                </div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
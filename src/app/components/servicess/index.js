import { S_Box } from './S_box'
import styles from './services.module.css'

export const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.content}>
                <div>
                    <h2>Services</h2>
                    <h1>Một số dịch vụ</h1>
                </div>
            </div>
            <div className={styles.box}>
                <S_Box/>
                <S_Box/>
            </div>
        </div>
    )
}
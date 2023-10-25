import styles from './lienhe.module.css'
import { Svg3 } from '@/app/svgall'

export const Lienhe = () => {
    return (
        <div className={styles.lienhe}>
            <div className={styles.svg}><Svg3/></div>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <h3>Bạn có thắc mắc</h3>
                    <h1>Hãy để lại thông tin cho chúng tôi nhé !</h1>
                </div>
                <div className={styles.form}>
                    <input type='gmail' placeholder='You Email'></input>
                    <a>Gửi</a>
                </div>
            </div>
        </div>
    )
}
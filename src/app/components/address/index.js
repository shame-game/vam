import { Stint_Ultra_Condensed } from 'next/font/google'
import styles from './address.module.css'
import { A_Box } from './A_Box'

export const Address = () => {
    return (
        <div className={styles.address}>
            <div className={styles.title}>
                <div className={styles.text}>
                    <h2>Địa điểm hot</h2>
                    <h1>Một số địa điểm gần bạn</h1>
                </div>
                <div className={styles.icon}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" fill="white" />
                        <rect x="0.5" y="0.5" width="99" height="99" rx="49.5" stroke="#191825" stroke-opacity="0.1" />
                    </svg>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="50" transform="matrix(-1 0 0 1 100 0)" fill="#5D50C6" />
                    </svg>

                </div>
            </div>
            <div className={styles.main}>
                <A_Box/>
                <A_Box/>
                <A_Box/>
            </div>  
        </div>
    )
}
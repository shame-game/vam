import Link from 'next/link'
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.wrap}>
            <div className={styles.logo}>
                <div className={styles.logo_wrap}>
                <img src='https://f11-zpcloud.zdn.vn/8382169442939946296/862ac52376f4a1aaf8e5.jpg'/>
                </div>
                <h1 className={styles.logo_text}>LHU ADLEY</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li>
                        <a>Trang chủ</a>
                    </li>
                    <li>
                        <Link href="/baidang">Bài đăng</Link>
                    </li>
                    <li>
                        <a>Thông tin du lịch</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.account}>
                    <a className={styles.login}>Log In</a>
                    <a className={styles.sign}><p>Sign Up</p></a>
            </div>
        </div>
    </header>
  )
}

import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <div className={styles.logo_wrap}>
                        <Image
                            alt="Logo"
                            src={logo}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <h1 className={styles.logo_text}>LHU ADLEY</h1>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.nav_list}>
                    <li>
                            <Link href="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link href="/baidang">Bài đăng</Link>
                        </li>
                        <li>
                            <Link href="/thongtin">Thông tin du lịch</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.account}>
                    <Link href='/login' className={styles.login}>Log In</Link>
                    <Link href='/sign' className={styles.sign}><p>Sign Up</p></Link>
                </div>
            </div>
        </header>
    )
}

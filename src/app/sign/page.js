import Link from 'next/link'
import styles from './sign.module.css'


export default function Sign() {
    return (
        <main className={styles.main}>
            <div className={styles.wrap}>
                <div className={styles.img}>
                    <img src="https://s3-alpha-sig.figma.com/img/4bd5/60fd/e947e6ca24b3f314a54b4de0066f1c4f?Expires=1699228800&Signature=CJgOP9EtmCtL8YXUZfROrw58Kj~68hsxfkTffrqs2dbegmcxAkkdF8A~GaacOyT~7grvc7OJ0hB6BbfNOfbwIHLH3xdRwEk~RADw5BizmfjxoPIkAr~~Vejs2OzbBGszjWKANEVqEMhHSbxmrw02BzwNVASqUtevXrI3~yogRazMdp2IY6Of~H9vJd0kChmbmdMmwSUFhCJ8~A0OY4DCLMKC38LyFiCQAl9yK8FMq5GOL59eBWXUY-8--KXNEt69TnxkudXFIL1vkqsjV4Y8ok07cb2yuuG6rACz2fSO-hthA8EVdpcM5MfgV8pkLlUXhSK3Fdnd~At5u8glmZAqIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_wrap}>
                        <h1>Đăng ký</h1>
                        <div className={styles.form}>
                            <input type='text' placeholder='Tài khoản'/>
                            <input type='password' placeholder='Mật khẩu'/>
                            <input type='password' placeholder='Nhập lại mật khẩu'/>
                        </div>
                        <div className={styles.bt_login}>
                            <a>Đăng ký ngay</a>
                        </div>
                        <div className={styles.ft}>
                            <p>Đã có tài khoản?<Link href="/login"> Đăng nhập ngay</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

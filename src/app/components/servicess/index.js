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
                <S_Box
                    img="https://s3-alpha-sig.figma.com/img/74d4/f241/95b42507bb1f398a48f75c5b82f8a709?Expires=1699228800&Signature=jhO7R86vPpfa8TTJsBn9l7fEBYHF2UCSlUFQgr4EXpTQT7PDqg-Kjegwk~9KjCp7cvAQgFY8kjXCDI2H37FeaNqGk3mCZ7K1LK8S3FWVrngqconrYdJTTiO2KyM3qVxXGTd1e2sNE8rBrFIi9~DHCgEEMVlzer5Qa3uk5IatIQFcsUXjSMv1MDeh9XD2BrXFjeK5Z9KtfGqPepP5nGNTR4-ZU9bIjVrl0Xk3KyNah2-5yhxWOBnd034txxS8I-xTX7SFPtxgbKKPUcSiYc3O0-p2d4ySWgcpWxl1wxdgKMmJG-FrvxBEw4vfEEuXGOIArNvnl~m488FdFxRl5Jh8kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    title="Đặt theo tour"
                    content="Chúng tôi có thể giúp bạn hoàn thành tour du lịch này."
                />
                <S_Box
                    img="https://s3-alpha-sig.figma.com/img/236e/1d96/421be3c5eec7b9562b60e0e4c7449aeb?Expires=1699228800&Signature=RMKp90Z6umi5cFcdiuIVHqeQ8ZjGueNLGfwpejZV8wbPuipegE2GHpjUss8Zl8xfvKn0CT~ueGHiJvF1N4buNu5GsfkQIuMOtXgvkoYlAouhf9SikLu85IccAXKSkaXoy1j3RIDjdyd8E-uB0~wtCeX~OmdzQ5HTPaeCHPZp~93pGJc1h0SM91r34~fpu~44htvkqZsIVTDrqEGHdvevobpJ0w7cKtoMww~659-FnkLN1X727UkzxKhyyMmal~HpYpNXHdZxNTEE0zieVaAuMEodVSXN3jL2pwc7ZLhdU5MfHV6By3L4W33l9wUddzrkelK4HnnqkxigUIgdimDr~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    title="Đặt cá nhân"
                    content="Chúng tôi sẽ giúp chuyến đi của bạn hết cô đơn."
                />
            </div>
        </div>
    )
}
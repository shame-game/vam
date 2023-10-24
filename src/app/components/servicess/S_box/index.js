import styles from './box.module.css'

export const S_Box = () => {
    return (
        <div className={styles.box}>
            <div className={styles.wrap}>
                <div className={styles.img}>
                    <img width='50px' height='50px' src='https://s3-alpha-sig.figma.com/img/74d4/f241/95b42507bb1f398a48f75c5b82f8a709?Expires=1699228800&Signature=jhO7R86vPpfa8TTJsBn9l7fEBYHF2UCSlUFQgr4EXpTQT7PDqg-Kjegwk~9KjCp7cvAQgFY8kjXCDI2H37FeaNqGk3mCZ7K1LK8S3FWVrngqconrYdJTTiO2KyM3qVxXGTd1e2sNE8rBrFIi9~DHCgEEMVlzer5Qa3uk5IatIQFcsUXjSMv1MDeh9XD2BrXFjeK5Z9KtfGqPepP5nGNTR4-ZU9bIjVrl0Xk3KyNah2-5yhxWOBnd034txxS8I-xTX7SFPtxgbKKPUcSiYc3O0-p2d4ySWgcpWxl1wxdgKMmJG-FrvxBEw4vfEEuXGOIArNvnl~m488FdFxRl5Jh8kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                </div>
                <h1>Title</h1>
                <p>Chúng tôi có thể giúp bạn hoàn thành tour du lịch này</p>
            </div>
        </div>
    )
}
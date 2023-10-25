import Image from 'next/image'
import styles from './home1.module.css'
import home1 from '../../../../public/home1.png'
import { H_Box } from './H_Box'

export const Home1 = () => {
    return (
        <div className={styles.home1}>
            <div className={styles.img}>
                <Image
                    alt="home"
                    src={home1}
                    sizes="100vw"
                    style={{
                        width: '70%',
                        height: 'auto',
                    }}
                />
                <div className={styles.backg}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.wrap}>
                    <div>
                        <h2>DU LỊCH CÙNG CHÚNG TÔI</h2>
                        <h1>Đáp ứng sự hài lòng của mọi người</h1>
                        <p>Không đơn giản đây là nơi để chia sẽ mà là nơi đáp ứng nhu cầu của tất cả mọi người</p>
                    </div>
                    <div>
                        <div className={styles.box1}>
                            <H_Box
                                title="500+"
                                content="Người sử dụng"
                                style={{ width: '60%' }}
                            />
                            <H_Box
                                title="100"
                                content="Địa điểm du lịch"
                            />
                        </div>
                        <div className={styles.h_box}>
                            <div className={styles.box_wrap}>
                                <h1>2k+</h1>
                                <p>Sự hài lòng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

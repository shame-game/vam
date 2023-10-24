import { Map, Watching } from './intro_map'
import styles from './intro.module.css'

export const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <div className={styles.content_wrap}>
                        <h1>Hành trình <br /><span>du lịch</span><br /> của chúng ta</h1>
                        <p>We always make our customer happy by providing
                            as many choices as possible </p>
                        <div className={styles.content_button}>
                            <a className={styles.button_start}><h3>Bắt đầu</h3></a>
                            <a className={styles.button_view}>
                                <Watching/>
                                <h3>Watch Demo</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.map}>
                        <Map />
                    </div>
                    <div className={styles.image_wrap}>
                        <div className={styles.image_1}>
                            <img src='https://b-f1-zpc.zdn.vn/3187739032650636486/844525c77810af4ef601.jpg' />
                            <img src='https://b-f7-zpc.zdn.vn/9122510679884083461/5208f67594a243fc1ab3.jpg' />
                        </div>
                        <div className={styles.image_2}>
                            <img src='https://f27-zpc.zdn.vn/7985670074597034357/6b1cc061a2b675e82ca7.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import styles from './thongtin.module.css'

export default function Thongtin() {
    return (
        <main>
            <Header />
            <div className={styles.img}>
                <img src="https://s3-alpha-sig.figma.com/img/cee2/d549/33127c1d3ddbbb5d4cb4d26865a47b5b?Expires=1699228800&Signature=kFaLuGwcdbI6kT2w8ure6z4PzAfl8VWjGuflDpSFLTl6SlFGorKxegl~tzKSx6Z2Nh-L2Xj022f6hjDp4XWK6nUHYfhwCNp9gm~u~3uoyZFJKeDl5MRd1kExGtWQtK3HZ3jfCm9T31wt7co10wpYFeQQL05rtH534Eg341usmK~3oIuSREt5ZGsyA0hNXou3xpt5k~qqfKvuD33kW0GIHj0z6Rc30kIw9A2PpjMJ00ywjxihaWZ6uZok2RJuhFxqq-AC9RQPoCjk1e2zSff6var98xNcQcgq8WUaSOwVV7cHGVOdakV1CI~oOfqGpRZpB~cHRO~Ayev4CMq1jglyFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
            </div>
            <div className={styles.wrap}>
                <div className={styles.main}>
                    
                </div>
            </div>
            <Footer />
        </main>
    )
}

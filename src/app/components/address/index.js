
import styles from './address.module.css'
import { A_Box } from './A_Box'
import {Next, Back} from '@/app/svgall'

export const Address = () => {
    return (
        <div className={styles.address}>
            <div className={styles.title}>
                <div className={styles.text}>
                    <h2>Địa điểm hot</h2>
                    <h1>Một số địa điểm gần bạn</h1>
                </div>
                <div className={styles.icon}>
                    <div className={styles.button} ><Back fill="white" /></div>
                    <div className={styles.button} ><Next fill="white" /></div>
                </div>
            </div>
            <div className={styles.main}>
                <A_Box
                    img="https://f12-zpc.zdn.vn/1554688886800023133/69f22088425f9501cc4e.jpg"
                    title="Khu du lịch Bửu Long"
                    content="Biên Hòa, Đồng Nai"
                    danhgia="4.8"
                />
                <A_Box
                    img="https://f15-zpc.zdn.vn/6960701384401976872/6ea83bd359048e5ad715.jpg"
                    title="Khu vui chơi Bò Cạp Vàng"
                    content="Nhơn Trạch, Đồng Nai"
                    danhgia="4.5"
                />
                <A_Box
                    img="https://f12-zpc.zdn.vn/7193887127752406931/ed41fedea30974572d18.jpg"
                    title="Vườn quốc gia Nam Cát Tiên"
                    content="Tân Phú, Đồng Nai"
                    danhgia="5.0"
                />
            </div>  
        </div>
    )
}
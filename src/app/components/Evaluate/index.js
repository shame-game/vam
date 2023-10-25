'use client'
import avt1 from '../../../../public/6cb6a4fc53bc87e2dead.jpg'
import avt2 from '../../../../public/e547c3d29e05495b1014.jpg'
import avt3 from '../../../../public/5a35e3b9e79a33c46a8b.jpg'
import styles from './evaluate.module.css'
import { E_Box, E_svg } from './E_Box'
import { Next, Back } from '@/app/svgall'
import Carousel from 'react-bootstrap/Carousel';

export const Evaluate = () => {
    return (
        <div className={styles.eva}>
            <div className={styles.wrap}>
                <h2>Đánh giá</h2>
                <h1>Người dùng</h1>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className={styles.main}>
                                <E_Box
                                    avt={avt1}
                                    name="Six Bof"
                                    eva={<div>
                                        <E_svg />
                                        <E_svg />
                                        <E_svg />
                                        <E_svg />
                                    </div>}
                                    cmt="Tương đối"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.main}>
                                <E_Box
                                    avt={avt2}
                                    name="Lưu Trang"
                                    eva={<div>
                                        <E_svg />
                                        <E_svg />
                                        <E_svg />
                                        <E_svg />
                                        <E_svg />
                                    </div>}
                                    cmt="1 Trang web quá là tuyệt vời."
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.main}>
                                <E_Box
                                    avt={avt3}
                                    name="HuyDan"
                                    eva={<div>
                                        <E_svg />
                                        <E_svg />
                                    </div>}
                                    cmt="Những chuyến du lịch tuyệt vời nhưng hơi ít đồng loại nên không được đánh giá cao."
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

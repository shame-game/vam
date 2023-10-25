import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Intro } from './components/intro'
import { Svg1 } from './svgall'
import { Services } from './components/servicess'
import { Address } from './components/address'
import { Home1 } from './components/home1'
import { Evaluate } from './components/Evaluate'
import { Lienhe } from './components/lienhe'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.intro}>
        <Intro />
      </div>
      <div className={styles.svg}>
        <div className={styles.svg_wrap}> <Svg1/></div>
      </div>
      <div className={styles.services}>
        <Services/>
      </div>
      <div className={styles.address}>
        <Address/>
      </div>
      <div className={styles.home1}>
        <Home1/>
      </div>
      <div className={styles.evaluate}>
        <Evaluate/>
      </div>
      <div className={styles.home1}>
        <Lienhe/>
      </div>
      <Footer/>
    </main>
  )
}

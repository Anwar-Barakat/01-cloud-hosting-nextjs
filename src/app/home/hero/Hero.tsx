import { TiTick } from 'react-icons/ti'
import cloudImage from '../../../../public/cloud-hosting.png';
import Image from 'next/image';
import styles from './hero.module.css'

const HeroSection = () => {
    return (
        <div className={`md:flex grid gap-4 ${styles.hero}`}>
            <div className={styles.heroLeft}>
                <h1 className={styles.title}>Cloud Hosting</h1>
                <p className={styles.description}>
                    The best web hosting solution for your online success
                </p>
                <div className={`flex flex-col ${styles.services}`}>
                    <div className={`flex items-center gap-2 ${styles.serviceItem}`}>
                        <TiTick /> Easy to Control Panel
                    </div>
                    <div className={`flex items-center gap-2 ${styles.serviceItem}`}>
                        <TiTick /> Secure Hosting
                    </div>
                    <div className={`flex items-center gap-2 ${styles.serviceItem}`}>
                        <TiTick /> Website Maintenance
                    </div>
                </div>
            </div>
            <div>
                <Image src={cloudImage} alt='Cloud Image' width={500} height={500} />
            </div>
        </div>
    )
}

export default HeroSection

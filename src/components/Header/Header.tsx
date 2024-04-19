import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'
import NavbarSection from './Navbar'
const HeaderSection = () => {
    return (
        <header className={styles.header}>
            <NavbarSection />
            <div className={styles.buttons}>
                <Link className={`${styles.btn} ${styles.login}`} href="/login">Login</Link>
                <Link className={styles.btn} href="/register">Register</Link>
            </div>
        </header>
    )
}

export default HeaderSection

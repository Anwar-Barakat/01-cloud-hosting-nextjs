"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { MdTipsAndUpdates } from 'react-icons/md'
import styles from './header.module.css'
import { RiMenuFill } from 'react-icons/ri';
import { MdOutlineClose } from "react-icons/md";

const NavbarSection = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.logo}>CLOUD  <MdTipsAndUpdates /> HOSTING</Link>
                <div className={styles.menu}>
                    {
                        toggle ? <MdOutlineClose onClick={() => { setToggle(prev => !prev) }} /> : <RiMenuFill onClick={() => { setToggle(prev => !prev) }} />
                    }
                </div>
            </div>
            <div className={styles.navLinksWrapper}
                style={{ clipPath: toggle && 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' || '' }}
            >
                <ul className={styles.navLinks}>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">Home</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles">Articles</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarSection

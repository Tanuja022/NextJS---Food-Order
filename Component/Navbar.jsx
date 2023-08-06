import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { PiHamburger } from "react-icons/pi";
import {BsCart4} from "react-icons/bs"
function Navbar() {
  return (
    <div className={styles.container}>
        
        <div className={styles.phone}>
            <Image src="/Img/phone.jpeg" alt="" width="32" height="32"  />
        </div>
        <div className={styles.texts}>
         <div className={styles.text}>Order Now</div>
         <div className={styles.text}>012 345 6789</div>
        </div>

        <div className={styles.item}>
          <ul className={styles.list}>
              <li className={styles.listItem}>Homepage</li>
              <li className={styles.listItem}>Product</li>
              <li className={styles.listItem}>Menu</li>
              <PiHamburger/>
              <li className={styles.listItem}>Event</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <BsCart4 id='ca'/>
            <div className={styles.counter}>2</div>
          </div>

        </div>

        </div>

    
  )
}

export default Navbar
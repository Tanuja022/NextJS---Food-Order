import React from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

function Freatured() {
  return (
    <div className={styles.container}>
        <Image src="/Img/bg1.jpg" alt='' width='1500' height='600'/>
    </div>
  )
}

export default Freatured
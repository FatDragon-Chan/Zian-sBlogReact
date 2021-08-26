import React, { ReactElement } from 'react'
import styles from './Header.module.scss'
import Nav from '../Nav/Nav'
export default function Header(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Zian's Blog
        </div>
        <Nav />
      </div>
    </div>
  )
}

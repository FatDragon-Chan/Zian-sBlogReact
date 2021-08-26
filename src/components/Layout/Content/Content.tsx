import React, { ReactElement } from 'react'
import styles from './Content.module.scss'
export default function Content(): ReactElement {
  return (
    <div className={styles.container}>
      <h1>系统更新升级中</h1>
    </div>
  )
}

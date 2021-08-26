import React, { ReactElement } from 'react'
import styles from './Footer.module.scss'
export default function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div>本博客正在努力升级中(●'◡'●)ﾉ♥</div>
        <div>
          @ZianChen ———— 前端开发、php开发、后端、硬件...(⊙o⊙)…什么都学的程序员~
        </div>
        <div>
          本站点采用{' '}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">
            知识共享 署名-非商业性使用-禁止演绎 4.0 国际 许可协议
          </a>
        </div>
        <div>
          本站由 @ZianChen 创建 - © 2021.{' '}
          <a href="https://beian.miit.gov.cn/">粤ICP备2021041346号</a>{' '}
        </div>
      </div>
    </div>
  )
}
